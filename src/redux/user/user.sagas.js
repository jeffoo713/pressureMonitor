import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { signInFailure, signInSuccess, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure } from './user.actions';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

export function* getUserState(userAuth, additionalData) {
  try{
    const userRef = yield call(createUserProfileDocument, userAuth);
    const snapshot = yield userRef.get();
    const userState = { id:snapshot.id, ...snapshot.data(), ...additionalData }
    return userState
  } catch(error) {
    yield put(signInFailure(error.message))
  }
}

export function* signInWithGoogle() {
  try{
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userState = yield getUserState(user);
    yield put(signInSuccess(userState))
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

export function* signInWithEmail({ payload: {email, password} }) {
  try{
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    const userState = yield getUserState(user);
    yield put(signInSuccess(userState))
  } catch(error) {
    yield put(signInFailure(error.message))
  }
}

export function* signOut() {
  try{
    yield auth.signOut();
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error.message))
  }
}

export function* signUp({ payload: {email, password, displayName} }) {
  try{
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const userState = yield getUserState(user, { displayName });
    yield put(signUpSuccess())
    yield put(signInSuccess(userState))
  } catch(error) {
    yield put(signUpFailure(error.message))
  }
}

export function* checkCurrentUser() {
  try{
    const userAuth = yield getCurrentUser()
    if(!userAuth) return;
    const userState = yield getUserState(userAuth);
    yield put(signInSuccess(userState))
  } catch(error) {
    yield put(signInFailure(error.message))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUp() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onCheckCurrentUser() {
  yield takeLatest(UserActionTypes.CHECK_CURRENT_USER, checkCurrentUser)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOut),
    call(onSignUp),
    call(onCheckCurrentUser)
  ]);
}
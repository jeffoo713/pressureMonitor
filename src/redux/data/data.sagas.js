import { takeLatest, put, all, call } from 'redux-saga/effects';

import DataActionTypes from './data.action-types';
import UserActionTypes from '../user/user.action-types';

import { getUserDataSuccess, getUserDataFailure } from './data.action-creaters';

import { getUserDataFromFirestore } from '../../firebase/firebase.utils';

export function* getUserData({ payload: { id } }) {
  try{
    const data = yield call(getUserDataFromFirestore, id);
    yield put(getUserDataSuccess(data.dataArray));
  } catch(error) {
    yield put(getUserDataFailure(error));
  }
}

export function* onSignInSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, getUserData);
}

export function* dataSaga() {
  yield all([call(onSignInSuccess)]);
}
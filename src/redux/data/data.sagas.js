import { takeLatest, put, all, call } from 'redux-saga/effects';

import DataActionTypes from './data.action-types';
import UserActionTypes from '../user/user.action-types';

import { 
  getUserDataSuccess, 
  getUserDataFailure, 
  addDataSuccess, 
  addDataFailure, 
  removeDataSuccess, 
  removeDataFailure, 
  calculateStatsSuccess 
} from './data.action-creaters';

import { 
  getUserDataFromFirestore, 
  addDataItemInFirestore, 
  removeDataItemInFirestore,
  calculateStats 
} from '../../firebase/firebase.utils';

export function* getUserData({ payload: { id } }) {
  try{
    const data = yield call(getUserDataFromFirestore, id);
    yield put(getUserDataSuccess(data.dataArray));
  } catch(error) {
    yield put(getUserDataFailure(error.message));
  }
}

export function* addDataItem({payload: [item, user, dataArray]}) {
  try{
    yield call(addDataItemInFirestore, item, user, dataArray);
    const data = yield call(getUserDataFromFirestore, user.id);
    yield put(addDataSuccess(data.dataArray))
  } catch(error) {
    yield put(addDataFailure(error.message))
  }
}

export function* removeDataItem({payload: [itemId, user, dataArray]}) {
  try{
    yield call(removeDataItemInFirestore, itemId, user, dataArray)
    const data = yield call(getUserDataFromFirestore, user.id);
    yield put(removeDataSuccess(data.dataArray))
  } catch(error) {
    yield put(removeDataFailure(error.message))
  }
}

export function* getCalculatedStats(dataArray) {
  const statData = yield call(calculateStats, dataArray.payload);
  yield put(calculateStatsSuccess(statData))
}

export function* onSignInSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, getUserData);
}

export function* onAddDataStart() {
  yield takeLatest(DataActionTypes.ADD_DATA_START, addDataItem)
}

export function* onRemoveDataStart() {
  yield takeLatest(DataActionTypes.REMOVE_DATA_START, removeDataItem)
}

export function* onDataUpdate() {
  yield takeLatest([
    DataActionTypes.ADD_DATA_SUCCESS,
    DataActionTypes.REMOVE_DATA_SUCCESS,
    DataActionTypes.GET_USER_DATA_SUCCESS,
  ], getCalculatedStats)
}

export function* dataSaga() {
  yield all([
    call(onSignInSuccess),
    call(onAddDataStart),
    call(onRemoveDataStart),
    call(onDataUpdate),
  ]);
}
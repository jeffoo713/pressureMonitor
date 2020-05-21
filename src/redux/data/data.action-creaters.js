import DataActionTypes from './data.action-types';

export const getUserDataSuccess = dataArray => ({
  type: DataActionTypes.GET_USER_DATA_SUCCESS,
  payload: dataArray
});

export const getUserDataFailure = error => ({
  type: DataActionTypes.GET_USER_DATA_FAILURE,
  payload: error
});

export const addDataStart = (item, user, dataArray) => ({
  type: DataActionTypes.ADD_DATA_START,
  payload: [item, user, dataArray]
});

export const addDataSuccess = dataArray => ({
  type: DataActionTypes.ADD_DATA_SUCCESS,
  payload: dataArray
});

export const addDataFailure = error => ({
  type: DataActionTypes.ADD_DATA__FAILURE,
  payload: error
});

export const removeDataStart = (itemToRemoveId, user, dataArray) => ({
  type: DataActionTypes.REMOVE_DATA_START,
  payload: [itemToRemoveId, user, dataArray]
});

export const removeDataSuccess = dataArray => ({
  type: DataActionTypes.REMOVE_DATA_SUCCESS,
  payload: dataArray
});

export const removeDataFailure = error => ({
  type: DataActionTypes.REMOVE_DATA__FAILURE,
  payload: error
});

export const calculateStatsSuccess = dataArray => ({
  type: DataActionTypes.CALCULATE_STATS_SUCCESS,
  payload: dataArray
});
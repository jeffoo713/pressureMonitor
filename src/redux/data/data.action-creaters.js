import DataActionTypes from './data.action-types';

export const addItem = item => ({
  type: DataActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = id => ({
  type: DataActionTypes.REMOVE_ITEM,
  payload: id
});

export const calculateStats = data => ({
  type: DataActionTypes.CALCULATE_STATS,
  payload: data
});

export const getUserDataSuccess = dataArray => ({
  type: DataActionTypes.GET_USER_DATA_SUCCESS,
  payload: dataArray
});

export const getUserDataFailure = error => ({
  type: DataActionTypes.GET_USER_DATA_FAILURE,
  payload: error
});
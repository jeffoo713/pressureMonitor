import { DataActionTypes } from './data.types';

export const addItem = item => ({
  type: DataActionTypes.ADD_ITEM,
  payload: item
})

export const removeItem = id => ({
  type: DataActionTypes.REMOVE_ITEM,
  payload: id
})
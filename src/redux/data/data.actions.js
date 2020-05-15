import { DataActionTypes } from './data.types';

export const addItem =(item) => ({
  type: DataActionTypes.ADD_ITEM,
  payload: item
})
import { createSelector } from 'reselect';

const selectData  = state => state.data;

export const selectDataArr = createSelector(
  [selectData],
  data => data.data
);

export const selectStatData = createSelector(
  [selectData],
  data => data.statData
)
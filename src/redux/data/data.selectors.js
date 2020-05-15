import { createSelector } from 'reselect';

import { calculateStatsFromData } from './data.utils';

const selectData  = state => state.data;

export const selectDataArr = createSelector(
  [selectData],
  data => data.data
);

export const selectStatData = createSelector(
  [selectDataArr],
  dataArr => calculateStatsFromData(dataArr)
)
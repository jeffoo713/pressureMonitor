import { createSelector } from 'reselect';

const selectCalendar = state => state.calendar;

export const selectHiddenCalendar = createSelector(
  [selectCalendar],
  calendar => calendar.hiddenCalendar
);
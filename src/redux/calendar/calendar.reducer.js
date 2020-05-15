import { CalendarActionTypes } from './calendar.types';

const INITIAL_STATE = {
  hiddenCalendar: true
}

const calendarReducer = ( state=INITIAL_STATE, action ) => {
  switch (action.type) {
    case CalendarActionTypes.TOGGLE_CALENDAR:
      return {
        ...state, 
        hiddenCalendar: !state.hiddenCalendar
      }

    default:
      return state;
  }
}

export default calendarReducer;
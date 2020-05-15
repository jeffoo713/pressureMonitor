import { combineReducers } from 'redux';

import dataReducer from './data/data.reducer';
import calendarReducer from './calendar/calendar.reducer';

const rootReducer = combineReducers({
  data: dataReducer,
  calendar: calendarReducer
});

export default rootReducer;
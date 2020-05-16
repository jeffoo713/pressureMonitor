import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import dataReducer from './data/data.reducer';
import calendarReducer from './calendar/calendar.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'calendar']
}

const rootReducer = combineReducers({
  data: dataReducer,
  calendar: calendarReducer
});

export default persistReducer(persistConfig, rootReducer);
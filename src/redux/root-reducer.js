import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import dataReducer from './data/data.reducer';
import calendarReducer from './calendar/calendar.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'calendar', 'user']
}

const rootReducer = combineReducers({
  data: dataReducer,
  calendar: calendarReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer);
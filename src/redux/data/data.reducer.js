import { dataActionTypes } from './data.types';

const INITIAL_VALUE = {
  data: []
};

const dataReducer = (state=INITIAL_VALUE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default dataReducer;
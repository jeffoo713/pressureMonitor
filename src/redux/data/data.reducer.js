import { DataActionTypes } from './data.types';

import { 
  addItemToData, 
  removeItemFromData, 
  calculateStatsFromData 
} from './data.utils';


const INITIAL_VALUE = {
  data: [],
  statData: {
    avgSys: '',
    avgDia: '',
    avgBpm: '',
    hypoPerc: '',
    norPerc: '',
    prePerc: '',
    st1Perc: '',
    st2Perc: ''
  }
};

const dataReducer = (state=INITIAL_VALUE, action) => {
  switch(action.type) {
    case DataActionTypes.ADD_ITEM:
      return {
        ...state,
        data: addItemToData(state.data, action.payload)
      }
    case DataActionTypes.REMOVE_ITEM:
      return{
        ...state,
        data: removeItemFromData(state.data, action.payload)
      }
    case DataActionTypes.CALCULATE_STATS:
      return{
        ...state,
        statData: calculateStatsFromData(state.data)
      }
    default:
      return state;
  }
};

export default dataReducer;
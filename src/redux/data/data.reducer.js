import DataActionTypes from './data.action-types';
import UserActionTypes from '../user/user.action-types';

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
  },
  error: null
};

const dataReducer = (state=INITIAL_VALUE, action) => {
  switch(action.type) {
    case DataActionTypes.GET_USER_DATA_SUCCESS:
    case DataActionTypes.ADD_DATA_SUCCESS:
    case DataActionTypes.REMOVE_DATA_SUCCESS:
      return{
        ...state,
        data: action.payload,
        error: null
      }
    case DataActionTypes.GET_USER_DATA_FAILURE:
    case DataActionTypes.ADD_DATA_FAILURE:
    case DataActionTypes.REMOVE_DATA_FAILURE:
      return{
        ...state,
        error: action.payload
      }
    case DataActionTypes.CALCULATE_STATS_SUCCESS:
      return{
        ...state,
        statData: action.payload
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return{
        ...INITIAL_VALUE
      }
    default:
      return state;
  }
};

export default dataReducer;
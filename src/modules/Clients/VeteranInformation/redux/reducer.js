import * as actionTypes from './actionTypes';
import RequestStates from '../../../../utils/request-states';

const INITIAL_STATE = {
  requestState: RequestStates.init,
  veterans: [],
  error: '',
  currentVeteran: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_VETERANS_LOADING:
      return {
        ...state,
        requestState: RequestStates.loading,
      };
    case actionTypes.GET_VETERANS_SUCCESS:
      return {
        ...state,
        requestState: RequestStates.success,
        veterans: action.payload.data,
      };
    case actionTypes.GET_VETERANS_ERROR:
      return {
        ...state,
        requestState: RequestStates.error,
        error: 'something went wrong',
      };
    case actionTypes.SET_CURRENT_VETERAN:
      return {
        ...state,
        currentVeteran: action.payload,
      };
    default:
      return state;
  }
};

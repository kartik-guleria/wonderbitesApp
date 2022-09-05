import {
  GET_USER_REQUEST,
  GET_USER_REQUEST_SUCCESS,
  GET_USER_REQUEST_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_REQUEST_SUCCESS,
  LOG_OUT_REQUEST_FAILURE,

} from './constant';

const INITIAL_STATE = {
  userData: null,
  logOutData: null,
  error: null,
  loading: false,
};


function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.response,
      };
    case GET_USER_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

      case LOG_OUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOG_OUT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        logOutData: action.response,
      };
    case LOG_OUT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
export default reducer;

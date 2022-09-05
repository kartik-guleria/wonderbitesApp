import {
  SIGNIN_REQUEST,
  SIGNIN_REQUEST_SUCCESS,
  SIGNIN_REQUEST_FAILURE,
} from './constant';

const INITIAL_STATE = {
  loginData: null,
  error: null,
  loading: false,
};
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        loginData: action.response,
      };
    case SIGNIN_REQUEST_FAILURE:
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

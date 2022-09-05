import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST_SUCCESS,
  RESET_PASSWORD_REQUEST_FAILURE,
} from './constant';

const INITIAL_STATE = {
  passwordData: null,
  error: null,
  loading: false,
};
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RESET_PASSWORD_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        passwordData: action.response,
      };
    case RESET_PASSWORD_REQUEST_FAILURE:
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

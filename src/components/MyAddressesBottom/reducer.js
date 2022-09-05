import {
  DELETE_ADDRESS_REQUEST,
  DELETE_ADDRESS_REQUEST_SUCCESS,
  DELETE_ADDRESS_REQUEST_FAILURE,
} from './constant';

const INITIAL_STATE = {
  deleteAddressData: null,
  error: null,
  loading: false,
};
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DELETE_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ADDRESS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteAddressData: action.response,
      };
    case DELETE_ADDRESS_REQUEST_FAILURE:
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

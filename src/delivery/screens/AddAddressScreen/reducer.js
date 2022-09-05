import {
  ADD_ADDRESS_REQUEST,
  ADD_ADDRESS_REQUEST_SUCCESS,
  ADD_ADDRESS_REQUEST_FAILURE,
} from './constant';

const INITIAL_STATE = {
  addressData: null,
  error: null,
  loading: false,
};
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_ADDRESS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        addressData: action.response,
      };
    case ADD_ADDRESS_REQUEST_FAILURE:
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

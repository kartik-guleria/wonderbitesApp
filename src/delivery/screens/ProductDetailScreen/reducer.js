import {
  SHOW_PRODUCT_REQUEST,
  SHOW_PRODUCT_REQUEST_SUCCESS,
  SHOW_PRODUCT_REQUEST_FAILURE,
} from './constant';

const INITIAL_STATE = {
  productDetail: null,
  error: null,
  loading: false,
};
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SHOW_PRODUCT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetail: action.response,
      };
    case SHOW_PRODUCT_REQUEST_FAILURE:
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

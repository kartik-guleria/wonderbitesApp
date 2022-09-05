import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_REQUEST_SUCCESS,
  PRODUCT_LIST_REQUEST_FAILURE,
} from './constant';

const INITIAL_STATE = {
  productListData: null,
  error: null,
  loading: false,
};
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        productListData: action.response,
      };
    case PRODUCT_LIST_REQUEST_FAILURE:
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

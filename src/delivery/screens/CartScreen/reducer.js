import { NavIcons } from 'assets/';
import {
  CART_LIST_REQUEST,
  CART_LIST_REQUEST_SUCCESS,
  CART_LIST_REQUEST_FAILURE,
  SET_CART_REQUEST,
  SET_CART_REQUEST_SUCCESS,
  SET_CART_REQUEST_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_REQUEST_SUCCESS,
  DELETE_ITEM_REQUEST_FAILURE,
  APPLY_COUPON_REQUEST,
  APPLY_COUPON_REQUEST_SUCCESS,
  APPLY_COUPON_REQUEST_FAILURE,
  RESET_COUPON_DATA
} from './constant';
const INITIAL_STATE = {
  cartListData: null,
  setCartData: null,
  deleteCartData: null,
  couponData: null,
  error: null,
  loading: false,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CART_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CART_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        cartListData: action.response,
      };

    case CART_LIST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case SET_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_CART_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        setCartData: action.response,
      };

    case SET_CART_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    
      case DELETE_ITEM_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_ITEM_REQUEST_SUCCESS:
        return {
          ...state,
          loading: false,
          deleteCartData: action.response,
        };
  
      case DELETE_ITEM_REQUEST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };

    case APPLY_COUPON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case APPLY_COUPON_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        couponData: action.response,
      };

    case APPLY_COUPON_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case RESET_COUPON_DATA:
      return {
        ...state,
        loading: false,
        couponData: null
      };
      default:
      return state;
  }
}
export default reducer;

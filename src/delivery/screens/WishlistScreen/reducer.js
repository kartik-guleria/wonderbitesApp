import {
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_REQUEST_SUCCESS,
  GET_WISHLIST_REQUEST_FAILURE,

  DELETE_WISHLIST_REQUEST,
  DELETE_WISHLIST_REQUEST_SUCCESS,
  DELETE_WISHLIST_REQUEST_FAILURE,

  DELETE_WISHLIST_ITEM_REQUEST,
  DELETE_WISHLIST_ITEM_REQUEST_SUCCESS,
  DELETE_WISHLIST_ITEM_REQUEST_FAILURE,

  ADD_TO_CART_WISHLIST_REQUEST,
  ADD_TO_CART_WISHLIST_REQUEST_SUCCESS,
  ADD_TO_CART_WISHLIST_REQUEST_FAILURE,
} from '../WishlistScreen/constant';

const INITIAL_STATE = {
  getWishlistData: null,
  deletedWishlistData: null,
  deleteWishlistItemData: null,
  error: null,
  loading: false,
};
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_WISHLIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        getWishlistData: action.response,
      };
    case GET_WISHLIST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    
    case DELETE_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_WISHLIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        deletedWishlistData: action.response,
      };
    case DELETE_WISHLIST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case DELETE_WISHLIST_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_WISHLIST_ITEM_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteWishlistItemData: action.response
      };

    case DELETE_WISHLIST_ITEM_REQUEST_FAILURE:
      return {
        ...state,
        loading: false
      };

    case ADD_TO_CART_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ADD_TO_CART_WISHLIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case ADD_TO_CART_WISHLIST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}
export default reducer;

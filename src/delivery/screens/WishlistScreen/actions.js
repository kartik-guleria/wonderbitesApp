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

} from './constant';

export function getWishlistRequest() {
  return {
    type: GET_WISHLIST_REQUEST,
  };
}

export function getWishlistRequestSuccess(response) {
  return {
    type: GET_WISHLIST_REQUEST_SUCCESS,
    response,
  };
}

export function getWishlistRequestFailure(error) {
  return {
    type: GET_WISHLIST_REQUEST_FAILURE,
    error,
  };
}

export function deleteWishlistRequest(payload) {
  return {
    type: DELETE_WISHLIST_REQUEST,
    payload,
  };
}

export function deleteWishlistRequestSuccess(response) {
  return {
    type: DELETE_WISHLIST_REQUEST_SUCCESS,
    response,
  };
}

export function deleteWishlistRequestFailure(error) {
  return {
    type: DELETE_WISHLIST_REQUEST_FAILURE,
    error,
  }
}

export function deleteWishlistItemRequest(payload) {
  return {
    type: DELETE_WISHLIST_ITEM_REQUEST,
    payload,
  };
}

export function deleteWishlistItemRequestSuccess(response) {
  return {
    type: DELETE_WISHLIST_ITEM_REQUEST_SUCCESS,
    response,
  };
}

export function deleteWishlistItemRequestFailure(error) {
  return {
    type: DELETE_WISHLIST_ITEM_REQUEST_FAILURE,
    error,
  };
}

export function addToCartWishlistRequest(payload) {
  return {
      type: ADD_TO_CART_WISHLIST_REQUEST,
      payload
  };
}

export function addToCartWishlistRequestSuccess(response){
  return {
      type: ADD_TO_CART_WISHLIST_REQUEST_SUCCESS,
      response
  };
}

  export function addToCartWishlistRequestFailure(error) {
  return {
      type: ADD_TO_CART_WISHLIST_REQUEST_FAILURE,
      error
};
  }

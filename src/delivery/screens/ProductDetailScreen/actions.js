import {
  SHOW_PRODUCT_REQUEST,
  SHOW_PRODUCT_REQUEST_SUCCESS,
  SHOW_PRODUCT_REQUEST_FAILURE,
} from './constant';

export function showProductRequest(payload) {
  return {
    type: SHOW_PRODUCT_REQUEST,
    payload
  };
}

export function showProductRequestSuccess(response) {
  return {
    type: SHOW_PRODUCT_REQUEST_SUCCESS,
    response,
  };
}

export function showProductRequestFailure(error) {
  return {
    type: SHOW_PRODUCT_REQUEST_FAILURE,
    error,
  };
}

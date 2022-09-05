import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_REQUEST_SUCCESS,
  PRODUCT_LIST_REQUEST_FAILURE,
} from './constant';

export function productListRequest() {
  return {
    type: PRODUCT_LIST_REQUEST,
  };
}

export function productListRequestSuccess(response) {
  return {
    type: PRODUCT_LIST_REQUEST_SUCCESS,
    response,
  };
}

export function productListRequestFailure(error) {
  return {
    type: PRODUCT_LIST_REQUEST_FAILURE,
    error,
  };
}

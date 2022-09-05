import {
  DELETE_ADDRESS_REQUEST,
  DELETE_ADDRESS_REQUEST_SUCCESS,
  DELETE_ADDRESS_REQUEST_FAILURE,
} from './constant';

export function deleteAddressRequest(payload) {
  return {
    type: DELETE_ADDRESS_REQUEST,
    payload,
  };
}

export function deleteAddressRequestSuccess(response) {
  return {
    type: DELETE_ADDRESS_REQUEST_SUCCESS,
    response,
  };
}

export function deleteAddressRequestFailure(error) {
  return {
    type: DELETE_ADDRESS_REQUEST_FAILURE,
    error,
  };
}

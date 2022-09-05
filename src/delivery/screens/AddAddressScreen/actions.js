import {
  ADD_ADDRESS_REQUEST,
  ADD_ADDRESS_REQUEST_SUCCESS,
  ADD_ADDRESS_REQUEST_FAILURE,
} from './constant';

export function addAddressRequest(payload) {
  return {
    type: ADD_ADDRESS_REQUEST,
    payload,
  };
}

export function addAddressRequestSuccess(response) {
  return {
    type: ADD_ADDRESS_REQUEST_SUCCESS,
    response,
  };
}

export function addAddressRequestFailure(error) {
  return {
    type: ADD_ADDRESS_REQUEST_FAILURE,
    error,
  };
}

import {
  SIGNIN_REQUEST,
  SIGNIN_REQUEST_SUCCESS,
  SIGNIN_REQUEST_FAILURE,
} from './constant';

export function signInRequest(payload) {
  return {
    type: SIGNIN_REQUEST,
    payload,
  };
}

export function signInRequestSuccess(response) {
  return {
    type: SIGNIN_REQUEST_SUCCESS,
    response,
  };
}

export function signInRequestFailure(error) {
  return {
    type: SIGNIN_REQUEST_FAILURE,
    error,
  };
}

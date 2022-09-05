import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST_SUCCESS,
  RESET_PASSWORD_REQUEST_FAILURE,
} from './constant';

export function resetPasswordRequest(payload) {
  return {
    type: RESET_PASSWORD_REQUEST,
    payload,
  };
}

export function resetPasswordRequestSuccess(response) {
  return {
    type: RESET_PASSWORD_REQUEST_SUCCESS,
    response,
  };
}

export function resetPasswordRequestFailure(error) {
  return {
    type: RESET_PASSWORD_REQUEST_FAILURE,
    error,
  };
}

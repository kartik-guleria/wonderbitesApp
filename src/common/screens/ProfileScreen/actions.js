import {
  GET_USER_REQUEST,
  GET_USER_REQUEST_SUCCESS,
  GET_USER_REQUEST_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_REQUEST_SUCCESS,
  LOG_OUT_REQUEST_FAILURE
} from './constant';

export function getUserRequest(payload) {
  return {
    type: GET_USER_REQUEST,
    payload,
  };
}

export function getUserRequestSuccess(response) {
  return {
    type: GET_USER_REQUEST_SUCCESS,
    response,
  };
}

export function getUserRequestFailure(error) {
  return {
    type: GET_USER_REQUEST_FAILURE,
    error,
  };
}


export function logOutRequest(payload) {
  return {
    type: LOG_OUT_REQUEST,
    payload,
  };
}
export function logOutRequestSuccess(response) {
  return {
    type: LOG_OUT_REQUEST_SUCCESS,
    response,
  };
}
export function logOutRequestFailure(error) {
  return {
    type: LOG_OUT_REQUEST_FAILURE,
    error,
  };
}
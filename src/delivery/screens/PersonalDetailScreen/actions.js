import {
    USER_UPDATE_REQUEST,
    USER_UPDATE_REQUEST_SUCCESS,
    USER_UPDATE_REQUEST_FAILURE,
  } from './constant';
  
  export function userUpdateRequest(payload) {
    return {
      type: USER_UPDATE_REQUEST,
      payload
    };
  }
  
  export function userUpdateRequestSuccess(response) {
    return {
      type: USER_UPDATE_REQUEST_SUCCESS,
      response,
    };
  }
  
  export function userUpdateRequestFailure(error) {
    return {
      type: USER_UPDATE_REQUEST_FAILURE,
      error,
    };
  }
  
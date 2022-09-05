import {
    FETCH_CUISINES_REQUEST,
    FETCH_CUISINES_REQUEST_SUCCESS,
    FETCH_CUISINES_REQUEST_FAILURE
  } from './constant';
  
  export function fetchCuisinesRequest() {
    return {
      type: FETCH_CUISINES_REQUEST
    };
  }
  
  export function fetchCuisinesRequestSuccess(response) {
    return {
      type: FETCH_CUISINES_REQUEST_SUCCESS,
      response,
    };
  }
  
  export function fetchCuisinesRequestFailure(error) {
    return {
      type: FETCH_CUISINES_REQUEST_FAILURE,
      error,
    };
  }

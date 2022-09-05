import {
    FETCH_CUISINES_REQUEST,
    FETCH_CUISINES_REQUEST_SUCCESS,
    FETCH_CUISINES_REQUEST_FAILURE,
  } from './constant';
  
  const INITIAL_STATE = {
    cuisineData: null,
    error: null,
    loading: false,
  };
  
  function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case FETCH_CUISINES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_CUISINES_REQUEST_SUCCESS:
        return {
          ...state,
          loading: false,
          cuisineData: action.response,
        };
      case FETCH_CUISINES_REQUEST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  }
  export default reducer;
  
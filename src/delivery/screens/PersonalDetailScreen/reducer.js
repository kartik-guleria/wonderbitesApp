import {
    USER_UPDATE_REQUEST,
    USER_UPDATE_REQUEST_SUCCESS,
    USER_UPDATE_REQUEST_FAILURE,
  } from '../WishlistScreen/constant';
  
  const INITIAL_STATE = {
    userUpdateData: null,
    error: null,
    loading: false,
  };
  function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case USER_UPDATE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case USER_UPDATE_REQUEST_SUCCESS:
        return {
          ...state,
          loading: false,
          userUpdateData: action.response,
        };
      case USER_UPDATE_REQUEST_FAILURE:
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
  
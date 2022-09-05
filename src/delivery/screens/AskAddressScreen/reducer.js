import {
  FETCH_PLACES,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE,
  CLEAR_PLACES_LIST,
  REVERSE_GEO_PLACES,
  REVERSE_GEO_SUCCESS,
  REVERSE_GEO_FAILURE
} from './constant';

const intialState = {
  isLoading: false,
  errorMsg: '',
  placesData: [],
  locationData: [],
};

export default (state = intialState, action) => {
  switch (action.type) {
    case FETCH_PLACES:
      // alert('Fetch places');
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_PLACES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        placesData: action.response,
      };
    }

    case FETCH_PLACES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.message,
      };
    case REVERSE_GEO_PLACES:
      // alert('Fetch places');
      return {
        ...state,
        isLoading: true,
      };

    case REVERSE_GEO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        locationData: action.response,
      };
    }

    case REVERSE_GEO_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.message,
      };

    case CLEAR_PLACES_LIST:
      return {
        ...state,
        placesData: [],
      };
    default:
      return state;
  }
};

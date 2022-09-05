import {
  FETCH_PLACES,
  FETCH_PLACES_FAILURE,
  FETCH_PLACES_SUCCESS,
  CLEAR_PLACES_LIST,
  REVERSE_GEO_PLACES,
  REVERSE_GEO_SUCCESS,
  REVERSE_GEO_FAILURE
} from './constant';

export function fetchPlaces(payload) {
  return {
    type: FETCH_PLACES,
    payload,
  };
}

export function fetchPlacesSuccess(response) {
  return {
    type: FETCH_PLACES_SUCCESS,
    response,
  };
}

export function fetchPlacesFailure(error) {
  return {
    type: FETCH_PLACES_FAILURE,
    error,
  };
}

export function clearPlacesList(error) {
  return {
    type: CLEAR_PLACES_LIST,
    error,
  };
}

export function fetchRevGeoPlaces(payload) {
  return {
    type: REVERSE_GEO_PLACES,
    payload,
  };
}

export function fetchRevGeoSuccess(response) {
  return {
    type: REVERSE_GEO_SUCCESS,
    response,
  };
}

export function fetchRevGeoFailure(error) {
  return {
    type: REVERSE_GEO_FAILURE,
    error,
  };
}

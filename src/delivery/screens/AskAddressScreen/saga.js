import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import { API_URL, API_PARAMS, GOOGLE_PLACES_API_KEY, REVERSE_GEO_API_URL } from 'utils/config';
import { fetchPlacesSuccess, fetchPlacesFailure, fetchRevGeoSuccess, fetchRevGeoFailure } from './actions';
import { FETCH_PLACES, REVERSE_GEO_PLACES } from './constant';


function* onFetchPlacesRequest({payload}) {
  const GOOGLE_URL = `${API_URL}${payload}&${API_PARAMS.key}${GOOGLE_PLACES_API_KEY}`;
  try {
    const googleResponse = yield call(axios.get, GOOGLE_URL, {});
    if (googleResponse.status === 200) {
      yield put(fetchPlacesSuccess(googleResponse.data.results));
      console.log('Success  ' + JSON.stringify(googleResponse.data));
    } else {
      yield put(fetchPlacesFailure('Server Error!'));
    }
  } catch (error) {
    if (error)
      console.log(JSON.stringify(error));
    else yield put(fetchPlacesFailure('Something went wrong!'));
  }
}

function* onReverseGeoRequest({ payload }) {
  let pay = JSON.stringify(payload);
  const GOOGLE_URL = `${REVERSE_GEO_API_URL}${pay}&${API_PARAMS.key}${GOOGLE_PLACES_API_KEY}`;
  // alert(GOOGLE_URL);
  console.log(GOOGLE_URL);
  try {

    const googleResponse = yield call(axios.get, GOOGLE_URL, {});
    if (googleResponse.status === 200) {
      yield put(fetchRevGeoSuccess(googleResponse.data.results));
      // alert('Success  ' + JSON.stringify(googleResponse.data));
    } else {
      yield put(fetchRevGeoFailure('Server Error!'));
    }
  } catch (error) {
    if (error)
      console.log(JSON.stringify(error));
    else yield put(fetchRevGeoFailure('Something went wrong!'));
  }
}

function* FetchPlacesSaga() {
  yield takeEvery(FETCH_PLACES, onFetchPlacesRequest);
  yield takeEvery(REVERSE_GEO_PLACES, onReverseGeoRequest);
}

export default FetchPlacesSaga;

import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_CUISINES_REQUEST } from './constant';
import { fetchCuisinesRequestSuccess,fetchCuisinesRequestFailure} from './actions';
import API from 'constants/api';

function* onFetchCuisinesRequest() {
  try {
    const getCuisineResponse = yield call(axios.get, API.CATEGORY_LIST + "?type=cuisine");
    if (getCuisineResponse?.status === 200) {
      yield put(fetchCuisinesRequestSuccess(getCuisineResponse.data));
    } else {
      yield put(fetchCuisinesRequestFailure('Server Error!'));
    }
  } catch (error) {
    if (error) yield put(fetchCuisinesRequestFailure(error));
    else yield put(fetchCuisinesRequestFailure('Something went wrong!'));
  }
};

function* FetchCuisineSaga() {
  yield takeEvery(FETCH_CUISINES_REQUEST, onFetchCuisinesRequest);
};

export default FetchCuisineSaga;

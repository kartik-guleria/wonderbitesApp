import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_CATEGORY_REQUEST } from './constant';

import {
  fetchCategoryRequestSuccess,
  fetchCategoryRequestFailure,
  bannerRequestFailure,
  bannerRequestSuccess
} from './actions';
import axios from 'axios';
import API from 'constants/api';
import al from 'constants/translations/al';
function* onFetchCategoryRequest({ payload }) {
  try {
    const categoryResponse = yield call(axios.get, API.CATEGORY_LIST, { params: payload.params });
    if (categoryResponse.status === 200) {
      yield put(fetchCategoryRequestSuccess(categoryResponse.data));
    } else {
      yield put(fetchCategoryRequestFailure('error'));
    }
  } catch (error) {
    yield put(fetchCategoryRequestFailure(error));
  }
}

// function* onFetchBannerRequest() {
//   try {
//     const bannerResponse = yield call(axios.get, API.BANNER_LIST);
//     if (bannerResponse.status === 200) {
//       console.log(JSON.stringify(bannerResponse.data));
//       yield put(bannerRequestSuccess(bannerResponse.data));
//     } else {
//       yield put(bannerRequestFailure('error'));
//     }
//   } catch (error) {
//     yield put(bannerRequestFailure(error));
//   }
// }

function* MainSaga() {
  yield takeEvery(FETCH_CATEGORY_REQUEST, onFetchCategoryRequest);
  // yield takeEvery(FETCH_BANNER_REQUEST, onFetchBannerRequest);
}

export default MainSaga;

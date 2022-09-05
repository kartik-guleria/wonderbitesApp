import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { SHOW_PRODUCT_REQUEST } from './constant';
import { showProductRequestSuccess, showProductRequestFailure } from './actions';
import API from 'constants/api';
function* onShowProductRequest({ payload }) {
  try {
    const detailURL = API.PRODUCT_LIST + payload
    const productDetailResponse = yield call(axios.get, detailURL);
    if (productDetailResponse.status === 200) {
      yield put(showProductRequestSuccess(productDetailResponse.data));
      // console.warn(JSON.stringify(productDetailResponse.data));
    } else {
      yield put(showProductRequestFailure('Server Error!'));
    }
  } catch (error) {
    yield put(showProductRequestFailure('Something went wrong!'));
  }

}

function* ShowProductSaga() {
  yield takeEvery(SHOW_PRODUCT_REQUEST, onShowProductRequest);
}

export default ShowProductSaga;

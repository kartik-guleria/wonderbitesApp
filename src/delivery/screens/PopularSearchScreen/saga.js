import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { PRODUCT_LIST_REQUEST } from './constant';
import { productListRequestSuccess, productListRequestFailure } from './actions';
import API from 'constants/api';
function* onProductListRequest() {
  try {
    const productListResponse = yield call(axios.get, API.PRODUCT_LIST);

    if (productListResponse.status === 200) {
      yield put(productListRequestSuccess(productListResponse.data));
      // alert(JSON.stringify(productListResponse.data));
    } else {
      yield put(productListRequestFailure('Server Error!'));
    }
  } catch (error) {
    yield put(productListRequestFailure('Something went wrong!'));
  }

}

function* PopularSearchSaga() {
  yield takeEvery(PRODUCT_LIST_REQUEST, onProductListRequest);
}

export default PopularSearchSaga;

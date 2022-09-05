import { call, put, takeEvery } from 'redux-saga/effects';
import {GET_PAST_ORDER_DETAIL_REQUEST } from './constant';
import { getPastOrderDetailRequestSuccess,getPastOrderDetailRequestFailure } from './actions';
import axios from 'axios';
import API from 'constants/api';

function* onPastOrderDetailRequest({ payload }) {
  try {
    const PastOrderDetailResponse = yield call(axios.get, API.ORDER_DETAIL_URL + '/' + payload.orderId, payload);
    if (PastOrderDetailResponse.status === 200) {
      yield put(getPastOrderDetailRequestSuccess(PastOrderDetailResponse.data));
      console.log(PastOrderDetailResponse.data);
    } else {
      yield put(getPastOrderDetailRequestFailure('error'));
    }
  } catch (error) {
    yield put(getPastOrderDetailRequestFailure(error));
  }
}

function* PastOrderDetailSaga() {
  yield takeEvery(GET_PAST_ORDER_DETAIL_REQUEST, onPastOrderDetailRequest);
}

export default PastOrderDetailSaga;

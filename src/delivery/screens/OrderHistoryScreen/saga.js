import { call, put, takeEvery } from 'redux-saga/effects';
import {GET_PAST_ORDERS_REQUEST } from './constant';
import {
  getPastOrdersRequestSuccess,getPastOrdersRequestFailure
} from './actions';
import axios from 'axios';
import API from 'constants/api';

function* onPastOrdersRequest({ payload }) {
  try {
    const pastOrdersResponse = yield call(axios.get, API.ORDER_LIST_URL, payload);
    console.log(JSON.stringify(payload.params));
    if (pastOrdersResponse.status === 200) {
      yield put(getPastOrdersRequestSuccess(pastOrdersResponse.data));
      console.log(pastOrdersResponse.data);
    } else {
      yield put(getPastOrdersRequestFailure('error'));
    }
  } catch (error) {
    yield put(getPastOrdersRequestFailure(error));
  }
}

function* PastOrdersSaga() {
  yield takeEvery(GET_PAST_ORDERS_REQUEST, onPastOrdersRequest);
}

export default PastOrdersSaga;

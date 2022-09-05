import { call, put, takeEvery } from 'redux-saga/effects';
import {GET_UPCOMING_ORDERS_REQUEST } from './constant';
import { getUpcomingOrdersRequestSuccess,getUpcomingOrdersRequestFailure } from './actions';
import axios from 'axios';
import API from 'constants/api';

function* onUpcomingOrdersRequest(){
  try {
    const upcomingOrdersResponse = yield call(axios.get, /* upcoming orders api here*/);
    if (upcomingOrdersResponse.status === 200) {
      yield put(getUpcomingOrdersRequestSuccess(upcomingOrdersResponse.data));
      alert(upcomingOrdersResponse.data);
    } else {
      yield put(getUpcomingOrdersRequestFailure('error'));
    }
  } catch (error) {
    yield put(getUpcomingOrdersRequestFailure(error));
  }
}

function* UpcomingOrdersSaga() {
  yield takeEvery(GET_UPCOMING_ORDERS_REQUEST, onUpcomingOrdersRequest);
}

export default UpcomingOrdersSaga;

import { call, put, takeEvery } from 'redux-saga/effects';
import {GET_UPCOMING_ORDER_DETAIL_REQUEST, CANCEL_ORDER_REQUEST} from './constant';
import { getUpcomingOrderDetailRequestSuccess,getUpcomingOrderDetailRequestFailure, cancelOrderRequestSuccess,cancelOrderRequestFailure} from './actions';
import axios from 'axios';
import API from 'constants/api';

function* onUpcomingOrderDetailRequest(){
  try {
    const upcomingOrderDetailResponse = yield call(axios.get, /* upcoming orders detail api here*/);
    if (upcomingOrderDetailResponse.status === 200) {
      yield put(getUpcomingOrderDetailRequestSuccess(upcomingOrderDetailResponse.data));
      alert(upcomingOrderDetailResponse.data);
    } else {
      yield put(getUpcomingOrderDetailRequestFailure('error'));
    }
  } catch (error) {
    yield put(getUpcomingOrderDetailRequestFailure(error));
  }
}

function* onCancelOrderRequest({payload}){
  try {
    const cancelOrderResponse = yield call(axios.put, /* Cancel order api here */payload);
    if (cancelOrderResponse.status === 200) {
      yield put(cancelOrderRequestSuccess(cancelOrderResponse.data));
      alert(cancelOrderResponse.data);
    } else {
      yield put(cancelOrderRequestFailure('error'));
    }
  } catch (error) {
    yield put(cancelOrderRequestFailure(error));
  }
}

function* UpcomingOrderDetailSaga() {
  yield takeEvery(GET_UPCOMING_ORDER_DETAIL_REQUEST, onUpcomingOrderDetailRequest);
  yield takeEvery(CANCEL_ORDER_REQUEST, onCancelOrderRequest);

}

export default UpcomingOrderDetailSaga;

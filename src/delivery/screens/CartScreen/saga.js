import { call, put, takeEvery } from 'redux-saga/effects';
import { CART_LIST_REQUEST, SET_CART_REQUEST, DELETE_ITEM_REQUEST, APPLY_COUPON_REQUEST } from './constant';
import {
  cartListRequest,
  cartListRequestSuccess,
  cartListRequestFailure,
  setCartRequestSuccess,
  setCartRequestFailure,
  deleteItemRequestSuccess,
  deleteItemRequestFailure,
  applyCouponRequestFailure,
  applyCouponRequestSuccess,
  applyCouponRequest
} from './actions';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import API from 'constants/api';
function* onCartListRequest() {
  try {
    const cartListResponse = yield call(axios.get, API.CART_LIST);
    if (cartListResponse.status === 200) {
      yield put(cartListRequestSuccess(cartListResponse.data));
    } else {
      yield put(cartListRequestFailure('error'));
    }
  } catch (error) {
    yield put(cartListRequestFailure(error));
  }
}

function* onSetCartRequest({ payload }) {

  try {
    const setCartResponse = yield call(axios.put, API.CART_LIST, payload);
    if (setCartResponse.status === 200) {
      yield put(setCartRequestSuccess(setCartResponse.data));

    } else {
      yield put(setCartRequestFailure('error'));
    }
  } catch (error) {

    yield put(setCartRequestFailure(error));
  }
}

function* onDeleteCartRequest({payload}) {
  try {
    const deleteCartResponse = yield call(axios.put, API.CART_LIST, payload);
    if (deleteCartResponse.status === 200) {
      yield put(deleteItemRequestSuccess(deleteCartResponse.data));
    } else {
      yield put(deleteItemRequestFailure('error'));
    }
  } catch (error) {
    console.log(JSON.stringify(error));
    yield put(deleteItemRequestFailure(error));
  }
}

function* onApplyCouponRequest({ payload }) {
  try {
    const applyCouponResponse = yield call(axios.post, API.APPLY_COUPON_URL, payload);
    if (applyCouponResponse.status === 200) {
      yield put(applyCouponRequestSuccess(applyCouponResponse.data));
    } else {
      yield put(applyCouponRequestFailure('error'));
    }
  } catch (error) {
    const data = JSON.parse(error.request._response);
    const errors = data.messages;
    console.log(JSON.stringify(errors.coupon));
    yield put(applyCouponRequestFailure(error));
  }
}

function* CartScreenSaga() {
  yield takeEvery(CART_LIST_REQUEST, onCartListRequest);
  yield takeEvery(SET_CART_REQUEST, onSetCartRequest);
  yield takeEvery(DELETE_ITEM_REQUEST, onDeleteCartRequest);
  yield takeEvery(APPLY_COUPON_REQUEST, onApplyCouponRequest);

}
export default CartScreenSaga;

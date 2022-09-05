import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ADD_TO_CART_REQUEST, ADD_TO_WISHLIST_REQUEST, FETCH_CATEGORY_PRODUCT_REQUEST } from './constant';
import {
  categoryProductRequestSuccess,
  categoryProductRequestFailure,
  addToCartRequestFailure,
  addToCartRequestSuccess,
  addToWishlistRequestSuccess,
  addToWishlistRequestFailure
} from './actions';
import axios from 'axios';
import API from 'constants/api';
function* onFetchCategoryProductRequest({ payload }) {
  try {

    const categoryResponse = yield call(axios.get, API.CATEGORY_LIST + '/' + payload.catId, { params: payload.params });
    if (categoryResponse.status === 200) {
      yield put(categoryProductRequestSuccess(categoryResponse.data));
    } else {
      yield put(categoryProductRequestFailure('error'));
    }
  } catch (error) {
    yield put(categoryProductRequestFailure(error));
  }
}

function* onAddToCartRequest({ payload }) {
  try {
    console.log(JSON.stringify(payload));
    const addToCartResponse = yield call(axios.put, API.CART_LIST, payload);
    if (addToCartResponse.status === 200) {
      yield put(addToCartRequestSuccess(addToCartResponse.data));
      console.log(addToCartResponse.data.products);
    } else {
      yield put(addToCartRequestFailure('error'));
    }
  } catch (error) {
    console.log(JSON.stringify(error));
    yield put(addToCartRequestFailure(error));
  }
}

function* onAddToWishlistRequest({ payload }) {
  console.log(JSON.stringify(payload));
  try {
    const addToWishlistResponse = yield call(axios.post, API.CREATE_WISHLIST_URL, payload);
    if (addToWishlistResponse.status === 200) {
      yield put(addToWishlistRequestSuccess(addToWishlistResponse.data));
    } else {
      yield put(addToWishlistRequestFailure('error'));
    }
  } catch (error) {
    console.log(JSON.stringify(error));
    yield put(addToWishlistRequestFailure(error));
  }
}

function* CategoryScreenSaga() {
  yield takeEvery(FETCH_CATEGORY_PRODUCT_REQUEST, onFetchCategoryProductRequest);
  yield takeEvery(ADD_TO_CART_REQUEST, onAddToCartRequest);
  yield takeLatest(ADD_TO_WISHLIST_REQUEST, onAddToWishlistRequest);
}

export default CategoryScreenSaga;

import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { DELETE_WISHLIST_REQUEST, GET_WISHLIST_REQUEST,DELETE_WISHLIST_ITEM_REQUEST,ADD_TO_CART_WISHLIST_REQUEST } from '../WishlistScreen/constant';
import { getWishlistRequestSuccess,deleteWishlistItemRequestSuccess,deleteWishlistItemRequestFailure, getWishlistRequestFailure, deleteWishlistRequestSuccess, deleteWishlistRequestFailure } from './actions';
import API from 'constants/api';
function* onGetWishlistRequest() {
  try {
    const getWishistResposne = yield call(axios.get, API.WISHLIST_SHOW_URL);
    if (getWishistResposne.status === 200) {
      yield put(getWishlistRequestSuccess(getWishistResposne.data));
      console.log("Success  " + JSON.stringify(getWishistResposne.data.products));
    } else {
      yield put(getWishlistRequestFailure('Server Error!'));
    }
  } catch (error) {
    // const data = JSON.parse(error.request._response);
    if (error) alert("Error" + JSON.stringify(error));
    else yield put(getWishlistRequestFailure('Something went wrong!'));
  }
}
function* onDeleteWishlistRequest({ payload }) {
  try {
    const deleteWishlistResponse = yield call(axios.delete, /*api url*/ payload);
    if (deleteWishlistResponse.status === 200) {
      yield put(deleteWishlistRequestSuccess(deleteWishlistResponse.data));
      alert("Success  " + JSON.stringify(deleteWishlistResponse.data));
    } else {
      yield put(deleteWishlistRequestFailure('Server Error!'));
    }
  } catch (error) {
    // const data = JSON.parse(error.request._response);
    if (error) alert("Error" + JSON.stringify(error));
    else yield put(deleteWishlistRequestFailure('Something went wrong!'));
  }
}
function* onDeleteWishlistItemRequest({ payload }) {
  try {
      const deleteWishlistItemResponse = yield call(axios.post, API.DELETE_WISHLIST_ITEM_URL, payload);
      if (deleteWishlistItemResponse.status === 200) {
          yield put(deleteWishlistItemRequestSuccess(deleteWishlistItemResponse.data));
          console.log(JSON.stringify(deleteWishlistItemResponse.data));
      } else {
          yield put(deleteWishlistItemRequestFailure('Server Error!'));
      }
  } catch (error) {
      if (error) alert("Error" + JSON.stringyfy(error));
      else yield put(deleteWishlistItemRequestFailure('Something Went Wrong!'));
  }
}

function* onAddToCartWishlistRequest({ payload }) {
    
  try {
      const addToCartWishlistResponse = yield call(axios.post, /* Add to cart wishlist api */ payload)
      if (addToCartWishlistResponse === 200) {
          yield put(addToCartWishlistRequestSuccess(addToCartWishlistResponse.data));
          alert("Success " + JSON.stringify(addToCartWishlistResponse.data));
      } else {
          yield put(addToCartWishlistRequestFailure('Server Error!'));
      }
  } catch (error) {
      if (error) alert("Error" + JSON.stringify(error));
      else yield put(addToCartWishlistRequestFailure('Something Went Wrong!'));
  }
}

function* WishlistSaga() {
  yield takeEvery(GET_WISHLIST_REQUEST, onGetWishlistRequest);
  yield takeEvery(DELETE_WISHLIST_REQUEST, onDeleteWishlistRequest);
  yield takeEvery(DELETE_WISHLIST_ITEM_REQUEST, onDeleteWishlistItemRequest);
  yield takeEvery(ADD_TO_CART_WISHLIST_REQUEST, onAddToCartWishlistRequest);
}

export default WishlistSaga;

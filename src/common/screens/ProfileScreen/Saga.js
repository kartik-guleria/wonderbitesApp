import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { GET_USER_REQUEST, LOG_OUT_REQUEST } from './constant';
import { getUserRequestSuccess, getUserRequestFailure, logOutRequestSuccess, logOutRequestFailure } from './actions';
import { setTokenAction } from 'common/actions';
import API from 'constants/api';
import { replace } from 'navigation/RootNaviagtion';

function* onGetUserRequest() {
  try {
    const getUserResponse = yield call(axios.get, API.GET_PROFILE_URL);
    if (getUserResponse?.status === 200) {
      yield put(getUserRequestSuccess(getUserResponse.data));
    } else {
      yield put(getUserRequestFailure('Server Error!'));
    }
  } catch (error) {
    if (error) yield put(getUserRequestFailure(error));
    else yield put(getUserRequestFailure('Something went wrong!'));
  }
};

function* onLogOutRequest() {
  try {
    const logOutResponse = yield call(axios.post, API.LOG_OUT_URL);
    if (logOutResponse?.status === 200) {
      yield put(logOutRequestSuccess(logOutResponse.data));
      yield put(setTokenAction(null));
      replace('Welcome')
    } else {
      yield put(logOutRequestFailure('Server Error'));
    }
  } catch (error) {
    if (error) {
      yield put(logOutRequestFailure(error));
      alert(error);
      }
    else yield put(logOutRequestFailure('Something went wrong!'));
  }
};

function* GetUserSaga() {
  yield takeEvery(GET_USER_REQUEST, onGetUserRequest);
  yield takeEvery(LOG_OUT_REQUEST, onLogOutRequest);
};

export default GetUserSaga;

import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {SIGNIN_REQUEST} from './constant';
import {signInRequestSuccess, signInRequestFailure} from './actions';
import { setTokenAction } from 'common/actions';
import API from 'constants/api';
import { replace } from 'navigation/RootNaviagtion';

function* onSignInRequest({ payload }) {
  try {
    const loginResponse = yield call(axios.post, API.LOGIN_URL, payload);
    if (loginResponse.status === 200) {
      yield put(signInRequestSuccess(loginResponse.data));
      yield put(setTokenAction(loginResponse?.data?.token));
    } else {
      yield put(setTokenAction(null));
      yield put(signInRequestFailure('Server Error!'));
    }
  } catch (error) {
    const data = JSON.parse(error.request._response);
    yield put(setTokenAction(null));
    if (error) yield put(signInRequestFailure(data.errors[0].message));
    else yield put(signInRequestFailure('Something went wrong!'));
  }
}

function* SignInSaga() {
  yield takeEvery(SIGNIN_REQUEST, onSignInRequest);
}

export default SignInSaga;

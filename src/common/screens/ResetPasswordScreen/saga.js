import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { RESET_PASSWORD_REQUEST } from './constant';
import { resetPasswordRequestSuccess, resetPasswordRequestFailure } from './actions';
import API from 'constants/api';

import { replace } from 'navigation/RootNaviagtion';

function* onResetPasswordRequest({ payload }) {
  try {
    const resetPasswordResponse = yield call(axios.post, API.RESET_PASSWORD, payload);
    if (resetPasswordResponse.status === 200) {
      yield put(resetPasswordRequestSuccess(true));
    } else {
      yield put(resetPasswordRequestFailure('Server Error!'));
    }
  } catch (error) {
    const data = JSON.parse(error.request._response);
    if (error) yield put(resetPasswordRequestFailure(data.errors[0].message));
    else yield put(resetPasswordRequestFailure('Something went wrong!'));
  }
}

function* ResetPasswordSaga() {
  yield takeEvery(RESET_PASSWORD_REQUEST, onResetPasswordRequest);
}

export default ResetPasswordSaga;

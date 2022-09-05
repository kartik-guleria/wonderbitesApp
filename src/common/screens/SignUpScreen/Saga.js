import {call, put, takeEvery} from 'redux-saga/effects';
import {SIGNUP_REQUEST} from './constant';
import axios from 'axios';
import {signUpRequestSuccess, signUpRequestFailure} from './actions';
import {replace} from 'navigation/RootNaviagtion';
import API from 'constants/api';
function* onSignUpRequest({payload}) {
  try {
    const signUpResponse = yield call(axios.post, API.SIGN_UP_URL, payload);
    if (signUpResponse.status === 200) {
      yield put(signUpRequestSuccess(signUpResponse.data));
    } else {
      yield put(signUpRequestFailure('Server Error!'));
    }
  } catch (error) {
    const data = JSON.parse(error.request._response);
    console.log(data);
    if (error) yield put(signUpRequestFailure(data));

      else yield put(signUpRequestFailure('Something went wrong!'));
  }
}
function* SignUpSaga() {
  yield takeEvery(SIGNUP_REQUEST, onSignUpRequest);
}

export default SignUpSaga;

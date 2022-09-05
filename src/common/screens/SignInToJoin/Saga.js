import {call, put, takeEvery} from 'redux-saga/effects';
import {SEND_OTP_REQUEST} from './constant';
import {sendOtpRequestSuccess,sendOtpRequestFailure} from './actions';

function* onSendOtpRequest({payload}) {
  try {
    const sendOtpResponse = yield call(axios.get, /* upcoming orders detail api here*/ payload);
    // const delay = time => new Promise(resolve => setTimeout(resolve, time));
    if (sendOtpResponse.status === 200) {
      yield put(sendOtpRequestSuccess(sendOtpResponse.data));
      alert(sendOtpResponse.data);
    } else {
      yield put(sendOtpRequestFailure('error'));
    }
  } catch (error) {
    yield put(sendOtpRequestFailure(error));
  }
}

function* SignJoinSaga() {
  yield takeEvery(SEND_OTP_REQUEST, onSendOtpRequest);
}

export default SignJoinSaga;
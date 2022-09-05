import {call, put, takeEvery} from 'redux-saga/effects';
import {RESEND_OTP_REQUEST,SUBMIT_OTP_REQUEST} from './constant';
import {resendOtpRequestSuccess,resendOtpRequestFailure,submitOtpRequestSuccess,submitOtpRequestFailure} from './actions';

function* onResendOtpRequest({payload}) {
  try {
    const resendOtpResponse = yield call(axios.put, /* upcoming orders detail api here*/ payload);
    // const delay = time => new Promise(resolve => setTimeout(resolve, time));
    if (resendOtpResponse.status === 200) {
      yield put(resendOtpRequestSuccess(resendOtpResponse.data));
      alert(resendOtpResponse.data);
    } else {
      yield put(resendOtpRequestFailure('error'));
    }
  } catch (error) {
    yield put(resendOtpRequestFailure(error));
  }
}

function* onSubmitOtpRequest({payload}) {
  try {
    const submitOtpResponse = yield call(axios.post, /* upcoming orders detail api here*/ payload);
    if (submitOtpResponse.status === 200) {
      yield put(submitOtpRequestSuccess(submitOtpResponse.data));
      alert(submitOtpResponse.data);
    } else {
      yield put(submitOtpRequestFailure('error'));
    }
  } catch (error) {
    yield put(submitOtpRequestFailure(error));
  }
}

function* VerificationCodeSaga() {
  yield takeEvery(RESEND_OTP_REQUEST, onResendOtpRequest);
  yield takeEvery(SUBMIT_OTP_REQUEST, onSubmitOtpRequest);

}

export default VerificationCodeSaga;
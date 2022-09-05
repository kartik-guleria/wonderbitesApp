import {call, put, takeEvery} from 'redux-saga/effects';
import {RESEND_EMAIL_OTP_REQUEST,SUBMIT_EMAIL_OTP_REQUEST} from './constant';
import {resendEmailOtpRequestSuccess,resendEmailOtpRequestFailure,submitEmailOtpRequestSuccess,submitEmailOtpRequestFailure} from './actions';

function* onResendEmailOtpRequest({payload}) {
  try {
    const resendEmailOtpResponse = yield call(axios.put, /* resend email otp api here*/ payload);
    // const delay = time => new Promise(resolve => setTimeout(resolve, time));
    if (resendEmailOtpResponse.status === 200) {
      yield put(resendEmailOtpRequestSuccess(resendEmailOtpResponse.data));
      alert(resendEmailOtpResponse.data);
    } else {
      yield put(resendEmailOtpRequestFailure('error'));
    }
  } catch (error) {
    yield put(resendEmailOtpRequestFailure(error));
  }
}

function* onSubmitEmailOtpRequest({payload}) {
  try {
    const submitEmailOtpResponse = yield call(axios.post, /* submit email otp api here*/ payload);
    if (submitEmailOtpResponse.status === 200) {
      yield put(submitEmailOtpRequestSuccess(submitEmailOtpResponse.data));
      alert(submitEmailOtpResponse.data);
    } else {
      yield put(submitEmailOtpRequestFailure('error'));
    }
  } catch (error) {
    yield put(submitEmailOtpRequestFailure(error));
  }
}

function* EmailVerificationSaga() {
  yield takeEvery(RESEND_EMAIL_OTP_REQUEST, onResendEmailOtpRequest);
  yield takeEvery(SUBMIT_EMAIL_OTP_REQUEST, onSubmitEmailOtpRequest);

}

export default EmailVerificationSaga;
import {call, put, takeEvery} from 'redux-saga/effects';
import {REGISTER_REQUEST} from './constant';
import {registerRequestSuccess,registerRequestFailure} from './actions';

function* onRegisterRequest({payload}) {
  try {
    const registerResponse = yield call(axios.post, /* register api here*/ payload);
    // const delay = time => new Promise(resolve => setTimeout(resolve, time));
    if (registerResponse.status === 200) {
      yield put(registerRequestSuccess(registerResponse.data));
      alert(registerResponse.data);
    } else {
      yield put(registerRequestFailure('error'));
    }
  } catch (error) {
    yield put(registerRequestFailure(error));
  }
}

function* RegisterSaga() {
  yield takeEvery(REGISTER_REQUEST, onRegisterRequest);
}

export default RegisterSaga;
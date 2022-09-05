import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {USER_UPDATE_REQUEST} from './constant';
import {userUpdateRequestSuccess, userUpdateRequestFailure} from './actions';
import { replace, navigate } from 'navigation/RootNaviagtion';
import API from 'constants/api';
function* onUserUpdateRequest({ payload }) {
  try { 
    const headerParams = {
      "Content - Type": "multipart/form-data"
    };
    const userUpdateResponse = yield call(axios.put, API.UPDATE_PROFILE_URL + payload.userId, payload.data, headerParams);
    if (userUpdateResponse.status === 200) {
        yield put(userUpdateRequestSuccess(userUpdateResponse.data));
      navigate('Profile')
      } else {
        yield put(userUpdateRequestFailure('Server Error!'));
      }
  } catch (error) {
    if (error) yield put(userUpdateRequestFailure('Something went wrong!'));
    }
    }

function* UserUpdateSaga() {
  yield takeEvery(USER_UPDATE_REQUEST, onUserUpdateRequest);
}

export default UserUpdateSaga;

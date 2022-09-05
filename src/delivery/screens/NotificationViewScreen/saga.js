import {call,put,takeEvery} from 'redux-saga/effects';
import { GET_NOTIFICATIONS_REQUEST} from './constant';
import { getNotificationsRequestSuccess,getNotificationsRequestFailure } from './actions';
import axios from 'axios';
import API from 'constants/api';

function* onGetNotificationsRequest() {
    try {
        const notificationResponse = yield call(axios.get, /* Notification api here */ );
        if (notificationResponse === 200) {
            yield put (getNotificationsRequestSuccess(notificationResponse.data));
            alert(notificationResponse.data);
        }else{
            yield put(getNotificationsRequestFailure('Error!'));
        }
    }catch (error){
        yield put(getNotificationsRequestFailure(error));
    }
}

function* NotificationSaga(){
    yield takeEvery(GET_NOTIFICATIONS_REQUEST, onGetNotificationsRequest);
}

export default NotificationSaga;
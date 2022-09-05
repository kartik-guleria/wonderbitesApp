import { call, put, takeEvery } from 'redux-saga/effects';
import { WONDERPOINTS_LIST_REQUEST, WONDERPOINTS_COUNT_REQUEST } from './constant';
import { wonderPointsListRequestFailure, wonderPointsListRequestSuccess, wonderPointsCountRequestFailure, wonderPointsCountRequestSuccess } from './actions';
import axios from 'axios';
import API from 'constants/api';

function* onWonderPointsListRequest({ payload }) { 
    try {
        const requestUrl = payload.filter == "" ? `${API.WONDERPOINTS_LIST_URL}${payload.page}` : `${API.WONDERPOINTS_LIST_URL}${payload.page}&filter=${payload.filter}`;
        const wonderPointsResponse = yield call(axios.get, requestUrl);
        if (wonderPointsResponse.status === 200) {
            yield put(wonderPointsListRequestSuccess(wonderPointsResponse.data));
        } else {
            yield put(wonderPointsListRequestFailure('Error!'));
        }
    } catch (error) {
        yield put(wonderPointsListRequestFailure(error));
    }
}

function* onWonderPointsCountRequest() {
    try {
        const headerParams = {
            "Accept": "application/json"
        };
        const wonderPointsCountResponse = yield call(axios.get, API.WONDERPOINTS_COUNT_URL, headerParams);
        if (wonderPointsCountResponse.status === 200) {
            yield put(wonderPointsCountRequestSuccess(wonderPointsCountResponse.data));
        } else {
            yield put(wonderPointsCountRequestFailure('Error!'));
        }
    } catch (error) {
        yield put(wonderPointsCountRequestFailure(error));
    }
}

function* WonderPonitsListSaga() {
    yield takeEvery(WONDERPOINTS_LIST_REQUEST, onWonderPointsListRequest);
    yield takeEvery(WONDERPOINTS_COUNT_REQUEST, onWonderPointsCountRequest);
}

export default WonderPonitsListSaga;

import {call,put,takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import { GET_ADDRESS_REQUEST } from './constant';
import { getAddressRequestSuccess,getAddressRequestFailure } from './actions';
import API from 'constants/api';

function* onGetAddressRequest() {
    try{
        const getAddressResponse = yield call (axios.get,API.ADDRESS_LIST_URL);
        if (getAddressResponse.status === 200) {
            yield put(getAddressRequestSuccess(getAddressResponse.data));
        }else {
            yield put(getAddressRequestFailure('Server Error!'));
        }
    } catch(error){
        if (error) yield put(getAddressRequestFailure(error));
        else yield put(getAddressRequestFailure('Something went wrong!'));
    }
}

function* GetAddressListSaga(){
    yield takeEvery(GET_ADDRESS_REQUEST, onGetAddressRequest);
}

export default GetAddressListSaga;
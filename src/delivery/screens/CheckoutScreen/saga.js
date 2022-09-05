import {call,put,takeEvery} from 'redux-saga/effects';
import { SET_CHECKOUT_REQUEST} from './constant';
import { setCheckoutRequestSuccess,setCheckoutRequestFailure } from './actions';
import axios from 'axios';
import API from 'constants/api';

function* onSetCheckoutRequest({ payload }) {
    console.log(JSON.stringify(payload))
    try {
        const checkoutResponse = yield call(axios.post, API.CHECKOUT_API, payload);
        if (checkoutResponse.status === 200) {
            console.log(checkoutResponse.data)
            yield put(setCheckoutRequestSuccess(checkoutResponse.data));
        } else {
            yield put(setCheckoutRequestFailure('Error!'));
        }
    } catch (error) {
        yield put(setCheckoutRequestFailure(error));
    }
}

function* CheckoutSaga(){
    yield takeEvery(SET_CHECKOUT_REQUEST, onSetCheckoutRequest);
}

export default CheckoutSaga;

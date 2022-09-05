import {
    SET_CHECKOUT_REQUEST,
    SET_CHECKOUT_REQUEST_SUCCESS,
    SET_CHECKOUT_REQUEST_FAILURE,
} from './constant';

export function setCheckoutRequest(payload) {
    return {
        type: SET_CHECKOUT_REQUEST,
        payload,
    };
}

export function setCheckoutRequestSuccess(response) {
    return {
        type: SET_CHECKOUT_REQUEST_SUCCESS,
        response,
    };
}

export function setCheckoutRequestFailure(error) {
    return {
        type: SET_CHECKOUT_REQUEST_FAILURE,
        error,
    };
}

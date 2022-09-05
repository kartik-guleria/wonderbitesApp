import {
    SEND_OTP_REQUEST,
    SEND_OTP_REQUEST_SUCCESS,
    SEND_OTP_REQUEST_FAILURE,
} from "./constant";

export function sendOtpRequest(payload) {
    return {
        type: SEND_OTP_REQUEST,
        payload,
    };
}

export function sendOtpRequestSuccess(response) {
    return {
        type: SEND_OTP_REQUEST_SUCCESS,
        response,
    };
}

export function sendOtpRequestFailure(error) {
    return {
        type: SEND_OTP_REQUEST_FAILURE,
        error,
    };
}
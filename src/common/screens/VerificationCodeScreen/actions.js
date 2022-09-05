import {
    RESEND_OTP_REQUEST,
    RESEND_OTP_REQUEST_SUCCESS,
    RESEND_OTP_REQUEST_FAILURE,

    SUBMIT_OTP_REQUEST,
    SUBMIT_OTP_REQUEST_SUCCESS,
    SUBMIT_OTP_REQUEST_FAILURE,
} from "./constant";

export function resendOtpRequest(payload) {
    return {
        type: RESEND_OTP_REQUEST,
        payload,
    };
}

export function resendOtpRequestSuccess(response) {
    return {
        type: RESEND_OTP_REQUEST_SUCCESS,
        response,
    };
}

export function resendOtpRequestFailure(error) {
    return {
        type: RESEND_OTP_REQUEST_FAILURE,
        error,
    };
}

export function submitOtpRequest(payload) {
    return {
        type: SUBMIT_OTP_REQUEST,
        payload,
    };
}

export function submitOtpRequestSuccess(response) {
    return {
        type: SUBMIT_OTP_REQUEST_SUCCESS,
        response,
    };
}

export function submitOtpRequestFailure(error) {
    return {
        type: SUBMIT_OTP_REQUEST_FAILURE,
        error,
    };
}
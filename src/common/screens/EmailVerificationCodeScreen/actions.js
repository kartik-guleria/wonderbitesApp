import {
    RESEND_EMAIL_OTP_REQUEST,
    RESEND_EMAIL_OTP_REQUEST_SUCCESS,
    RESEND_EMAIL_OTP_REQUEST_FAILURE,

    SUBMIT_EMAIL_OTP_REQUEST,
    SUBMIT_EMAIL_OTP_REQUEST_SUCCESS,
    SUBMIT_EMAIL_OTP_REQUEST_FAILURE,
} from "./constant";

export function resendEmailOtpRequest(payload) {
    return {
        type: RESEND_EMAIL_OTP_REQUEST,
        payload,
    };
}

export function resendEmailOtpRequestSuccess(response) {
    return {
        type: RESEND_EMAIL_OTP_REQUEST_SUCCESS,
        response,
    };
}

export function resendEmailOtpRequestFailure(error) {
    return {
        type: RESEND_EMAIL_OTP_REQUEST_FAILURE,
        error,
    };
}

export function submitEmailOtpRequest(payload) {
    return {
        type: SUBMIT_EMAIL_OTP_REQUEST,
        payload,
    };
}

export function submitEmailOtpRequestSuccess(response) {
    return {
        type: SUBMIT_EMAIL_OTP_REQUEST_SUCCESS,
        response,
    };
}

export function submitEmailOtpRequestFailure(error) {
    return {
        type: SUBMIT_EMAIL_OTP_REQUEST_FAILURE,
        error,
    };
}
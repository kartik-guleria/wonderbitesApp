import {
    RESEND_EMAIL_OTP_REQUEST,
    RESEND_EMAIL_OTP_REQUEST_SUCCESS,
    RESEND_EMAIL_OTP_REQUEST_FAILURE,

    SUBMIT_EMAIL_OTP_REQUEST,
    SUBMIT_EMAIL_OTP_REQUEST_SUCCESS,
    SUBMIT_EMAIL_OTP_REQUEST_FAILURE,
} from './constant';

const INITIAL_STATE = {
    resendEmailOtpData: null,
    submitEmailOtpData: null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case RESEND_EMAIL_OTP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case RESEND_EMAIL_OTP_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                resendEmailOtpData: action.response,
            };
        case RESEND_EMAIL_OTP_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        case SUBMIT_EMAIL_OTP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SUBMIT_EMAIL_OTP_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                submitEmailOtpData: action.response,
            };
        case SUBMIT_EMAIL_OTP_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
}
export default reducer;
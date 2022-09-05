import {
    RESEND_OTP_REQUEST,
    RESEND_OTP_REQUEST_SUCCESS,
    RESEND_OTP_REQUEST_FAILURE,

    SUBMIT_OTP_REQUEST,
    SUBMIT_OTP_REQUEST_SUCCESS,
    SUBMIT_OTP_REQUEST_FAILURE,
} from './constant';

const INITIAL_STATE = {
    resendOtpData: null,
    submitOtpData: null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case RESEND_OTP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case RESEND_OTP_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                resendOtpData: action.response,
            };
        case RESEND_OTP_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        case SUBMIT_OTP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SUBMIT_OTP_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                submitOtpData: action.response,
            };
        case SUBMIT_OTP_REQUEST_FAILURE:
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
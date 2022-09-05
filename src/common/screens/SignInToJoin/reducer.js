import {
   SEND_OTP_REQUEST,
   SEND_OTP_REQUEST_SUCCESS,
   SEND_OTP_REQUEST_FAILURE
} from './constant';

const INITIAL_STATE = {
    sendOtpData: null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEND_OTP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SEND_OTP_REQUEST_SUCCESS:
            alert(action.response);
            return {
                ...state,
                loading: false,
                sendOtpData: action.response,
            };
        case SEND_OTP_REQUEST_FAILURE:
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
import {
    GET_NOTIFICATIONS_REQUEST,
    GET_NOTIFICATIONS_REQUEST_SUCCESS,
    GET_NOTIFICATIONS_REQUEST_FAILURE,
} from './constant';

const INITIAL_STATE = {
    notificationData: null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_NOTIFICATIONS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_NOTIFICATIONS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                notificationData: action.response,
            };
        case GET_NOTIFICATIONS_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
}

export default reducer;
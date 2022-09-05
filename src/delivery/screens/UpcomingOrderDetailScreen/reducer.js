import {
    GET_UPCOMING_ORDER_DETAIL_REQUEST,
    GET_UPCOMING_ORDER_DETAIL_REQUEST_SUCCESS,
    GET_UPCOMING_ORDER_DETAIL_REQUEST_FAILURE,

    CANCEL_ORDER_REQUEST,
    CANCEL_ORDER_REQUEST_SUCCESS,
    CANCEL_ORDER_REQUEST_FAILURE
} from './constant';

const INITIAL_STATE = {
    upcomingOrderDetailData: null,
    cancelOrderData: null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_UPCOMING_ORDER_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_UPCOMING_ORDER_DETAIL_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                upcomingOrderDetailData: action.response,
            };

        case GET_UPCOMING_ORDER_DETAIL_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case CANCEL_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CANCEL_ORDER_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                cancelOrderData: action.response,
            };

        case CANCEL_ORDER_REQUEST_FAILURE:
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

import {
   GET_PAST_ORDER_DETAIL_REQUEST,
   GET_PAST_ORDER_DETAIL_REQUEST_SUCCESS,
   GET_PAST_ORDER_DETAIL_REQUEST_FAILURE,
} from './constant';

const INITIAL_STATE = {
    upcomingOrderDetailData : null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_PAST_ORDER_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_PAST_ORDER_DETAIL_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                upcomingOrderDetailData: action.response,
            };

        case GET_PAST_ORDER_DETAIL_REQUEST_FAILURE:
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

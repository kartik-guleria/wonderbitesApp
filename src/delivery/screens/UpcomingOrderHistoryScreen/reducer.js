import {
    GET_UPCOMING_ORDERS_REQUEST,
    GET_UPCOMING_ORDERS_REQUEST_SUCCESS,
    GET_UPCOMING_ORDERS_REQUEST_FAILURE
} from './constant';

const INITIAL_STATE = {
    upcomingOrdersData : null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_UPCOMING_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_UPCOMING_ORDERS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                upcomingOrdersData: action.response,
            };

        case GET_UPCOMING_ORDERS_REQUEST_FAILURE:
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

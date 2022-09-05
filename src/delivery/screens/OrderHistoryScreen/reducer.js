import {
    GET_PAST_ORDERS_REQUEST,
    GET_PAST_ORDERS_REQUEST_SUCCESS,
    GET_PAST_ORDERS_REQUEST_FAILURE,
} from './constant';

const INITIAL_STATE = {
    pastOrdersData : null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_PAST_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_PAST_ORDERS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                pastOrdersData: action.response,
            };

        case GET_PAST_ORDERS_REQUEST_FAILURE:
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

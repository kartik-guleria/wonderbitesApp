import {
    SET_CHECKOUT_REQUEST,
    SET_CHECKOUT_REQUEST_SUCCESS,
    SET_CHECKOUT_REQUEST_FAILURE
} from './constant';

const INITIAL_STATE = {
    checkoutData: null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_CHECKOUT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SET_CHECKOUT_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                checkoutData: action.response,
            };
        case SET_CHECKOUT_REQUEST_FAILURE:
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
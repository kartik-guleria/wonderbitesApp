import {
    GET_ADDRESS_REQUEST,
    GET_ADDRESS_REQUEST_SUCCESS,
    GET_ADDRESS_REQUEST_FAILURE,
} from './constant';

const INITIAL_STATE = {
    addressData: null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_ADDRESS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADDRESS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                addressData: action.response,
            };
        case GET_ADDRESS_REQUEST_FAILURE:
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
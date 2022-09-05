import {
    REGISTER_REQUEST,
    REGISTER_REQUEST_SUCCESS,
    REGISTER_REQUEST_FAILURE
} from './constant';

const INITIAL_STATE = {
    registerdata: null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case REGISTER_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                registerdata: action.response,
            };
        case REGISTER_REQUEST_FAILURE:
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
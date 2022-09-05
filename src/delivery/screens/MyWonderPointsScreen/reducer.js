import {
    WONDERPOINTS_LIST_REQUEST,
    WONDERPOINTS_LIST_REQUEST_SUCCESS,
    WONDERPOINTS_LIST_REQUEST_FAILURE,
    WONDERPOINTS_COUNT_REQUEST,
    WONDERPOINTS_COUNT_REQUEST_SUCCESS,
    WONDERPOINTS_COUNT_REQUEST_FAILURE
} from './constant';

const INITIAL_STATE = {
    wonderPointsData: null,
    wonderPointsCount: null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case WONDERPOINTS_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case WONDERPOINTS_LIST_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                wonderPointsData: action.response,
            };
        case WONDERPOINTS_LIST_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        case WONDERPOINTS_COUNT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case WONDERPOINTS_COUNT_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                wonderPointsCount: action.response,
            };
        case WONDERPOINTS_COUNT_REQUEST_SUCCESS:
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

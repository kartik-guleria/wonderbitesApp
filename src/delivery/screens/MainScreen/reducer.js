import {
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_REQUEST_SUCCESS,
    FETCH_CATEGORY_REQUEST_FAILURE,
    FETCH_BANNER_REQUEST,
    BANNER_REQUEST_SUCCESS,
    BANNER_REQUEST_FAILURE

} from './constant';
const INITIAL_STATE = {
    categoryData: null,
    bannerData: null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_CATEGORY_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                categoryData: action.response,
            };

        case FETCH_CATEGORY_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case FETCH_BANNER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case BANNER_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                bannerData: action.response,
            };

        case BANNER_REQUEST_FAILURE:
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

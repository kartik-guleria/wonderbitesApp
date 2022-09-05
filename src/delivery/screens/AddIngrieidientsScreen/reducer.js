import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_REQUEST_FAILURE, GET_INGREDIENTS_REQUEST_SUCCESS } from './constants';

const INITIAL_STATE = {
    ingredientData: null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_INGREDIENTS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                ingredientData: action.response,
            };
        case GET_INGREDIENTS_REQUEST_FAILURE:
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

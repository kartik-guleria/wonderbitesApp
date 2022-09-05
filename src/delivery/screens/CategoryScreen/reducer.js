import {
    FETCH_CATEGORY_PRODUCT_REQUEST,
    CATEGORY_PRODUCT_REQUEST_SUCCESS,
    CATEGORY_PRODUCT_REQUEST_FAILURE,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_REQUEST_SUCCESS,
    ADD_TO_CART_REQUEST_FAILURE,
    ADD_TO_WISHLIST_REQUEST,
    ADD_TO_WISHLIST_REQUEST_SUCCESS,
    ADD_TO_WISHLIST_REQUEST_FAILURE
} from './constant';
const INITIAL_STATE = {
    catProductData: null,
    addToCartData: null,
    addToWishlistData: null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_CATEGORY_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CATEGORY_PRODUCT_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                catProductData: action.response,
            };

        case CATEGORY_PRODUCT_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        case ADD_TO_CART_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_TO_CART_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                addToCartData: action.response,
            };

        case ADD_TO_CART_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        case ADD_TO_WISHLIST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_TO_WISHLIST_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                addToWishlistData: action.response,
            };

        case ADD_TO_WISHLIST_REQUEST_FAILURE:
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

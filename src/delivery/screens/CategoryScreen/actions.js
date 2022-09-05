import {
    FETCH_CATEGORY_PRODUCT_REQUEST,
    CATEGORY_PRODUCT_REQUEST_SUCCESS,
    CATEGORY_PRODUCT_REQUEST_FAILURE,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_REQUEST_SUCCESS,
    ADD_TO_CART_REQUEST_FAILURE,
    ADD_TO_WISHLIST_REQUEST,
    ADD_TO_WISHLIST_REQUEST_SUCCESS,
    ADD_TO_WISHLIST_REQUEST_FAILURE,
} from './constant';

export function fetchCategoryProductRequest(payload) {
    return {
        type: FETCH_CATEGORY_PRODUCT_REQUEST,
        payload
    };
}

export function categoryProductRequestSuccess(response) {
    return {
        type: CATEGORY_PRODUCT_REQUEST_SUCCESS,
        response,
    };
}

export function categoryProductRequestFailure(error) {
    return {
        type: CATEGORY_PRODUCT_REQUEST_FAILURE,
        error,
    };
}

export function addToCartRequest(payload) {
    return {
        type: ADD_TO_CART_REQUEST,
        payload
    };
}

export function addToCartRequestSuccess(response) {
    return {
        type: ADD_TO_CART_REQUEST_SUCCESS,
        response,
    };
}

export function addToCartRequestFailure(error) {
    return {
        type: ADD_TO_CART_REQUEST_FAILURE,
        error,
    };
}

export function addToWishlistRequest(payload) {
    return {
        type: ADD_TO_WISHLIST_REQUEST,
        payload
    };
}

export function addToWishlistRequestSuccess(response) {
    return {
        type: ADD_TO_WISHLIST_REQUEST_SUCCESS,
        response,
    };
}

export function addToWishlistRequestFailure(error) {
    return {
        type: ADD_TO_WISHLIST_REQUEST_FAILURE,
        error,
    };
}

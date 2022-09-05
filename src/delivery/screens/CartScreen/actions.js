import {
    CART_LIST_REQUEST,
    CART_LIST_REQUEST_SUCCESS,
    CART_LIST_REQUEST_FAILURE,

    SET_CART_REQUEST,
    SET_CART_REQUEST_SUCCESS,
    SET_CART_REQUEST_FAILURE,

    DELETE_ITEM_REQUEST,
    DELETE_ITEM_REQUEST_SUCCESS,
    DELETE_ITEM_REQUEST_FAILURE,

    APPLY_COUPON_REQUEST,
    APPLY_COUPON_REQUEST_SUCCESS,
    APPLY_COUPON_REQUEST_FAILURE,
    RESET_COUPON_DATA
} from './constant';

export function cartListRequest(payload) {
    return {
        type: CART_LIST_REQUEST,
        payload
    };
}

export function cartListRequestSuccess(response) {
    return {
        type: CART_LIST_REQUEST_SUCCESS,
        response,
    };
}

export function cartListRequestFailure(error) {
    return {
        type: CART_LIST_REQUEST_FAILURE,
        error,
    };
}

export function setCartRequest(payload) {
    return {
        type: SET_CART_REQUEST,
        payload,
    };
}

export function setCartRequestSuccess(response) {
    return {
        type: SET_CART_REQUEST_SUCCESS,
        response
    };
}

export function setCartRequestFailure(error) {
    return {
        type: SET_CART_REQUEST_FAILURE,
        error,
    };
}

export function deleteItemRequest(payload) {
    return {
        type: DELETE_ITEM_REQUEST,
        payload,
    };
}

export function deleteItemRequestSuccess(response) {
    return {
        type: DELETE_ITEM_REQUEST_SUCCESS,
        response
    };
}

export function deleteItemRequestFailure(error) {
    return {
        type: DELETE_ITEM_REQUEST_FAILURE,
        error,
    };
}


export function applyCouponRequest(payload) {

    return {
        type: APPLY_COUPON_REQUEST,
        payload,
    };
}

export function applyCouponRequestSuccess(response) {
    return {
        type: APPLY_COUPON_REQUEST_SUCCESS,
        response
    };
}

export function applyCouponRequestFailure(error) {
    return {
        type: APPLY_COUPON_REQUEST_FAILURE,
        error,
    };
}

export function resetCouponData() {
    return {
        type: RESET_COUPON_DATA
    };
}

import {
    REGISTER_REQUEST,
    REGISTER_REQUEST_SUCCESS,
    REGISTER_REQUEST_FAILURE
} from "./constant";

export function registerRequest(payload) {
    return {
        type: REGISTER_REQUEST,
        payload,
    };
}

export function registerRequestSuccess(response) {
    return {
        type: REGISTER_REQUEST_SUCCESS,
        response,
    };
}

export function registerRequestFailure(error) {
    return {
        type: REGISTER_REQUEST_FAILURE,
        error,
    };
}
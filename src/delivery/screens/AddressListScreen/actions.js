import {
    GET_ADDRESS_REQUEST,
    GET_ADDRESS_REQUEST_SUCCESS,
    GET_ADDRESS_REQUEST_FAILURE,
} from './constant';

export function getAddressRequest() {
    return {
        type: GET_ADDRESS_REQUEST,
    };
}

export function getAddressRequestSuccess(response) {
    return{
        type: GET_ADDRESS_REQUEST_SUCCESS,
        response,
    };
}

export function getAddressRequestFailure(error) {
    return{
        type: GET_ADDRESS_REQUEST_FAILURE,
        error,
    };
}
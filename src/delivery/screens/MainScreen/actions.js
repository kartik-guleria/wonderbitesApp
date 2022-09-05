import {
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_REQUEST_SUCCESS,
    FETCH_CATEGORY_REQUEST_FAILURE,
    FETCH_BANNER_REQUEST,
    BANNER_REQUEST_SUCCESS,
    BANNER_REQUEST_FAILURE
} from './constant';

export function fetchCategoryRequest(payload) {
    return{
        type: FETCH_CATEGORY_REQUEST,
        payload
    };
}

export function fetchCategoryRequestSuccess(response){
    return {
        type: FETCH_CATEGORY_REQUEST_SUCCESS,
        response,
    };
}

export function fetchCategoryRequestFailure(error){
    return{
        type: FETCH_CATEGORY_REQUEST_FAILURE,
        error,
    };
}
export function fecthBannerRequest() {
    return {
        type: FETCH_BANNER_REQUEST
    };
}

export function bannerRequestSuccess(response) {
    return {
        type: BANNER_REQUEST_SUCCESS,
        response,
    };
}

export function bannerRequestFailure(error) {
    return {
        type: BANNER_REQUEST_FAILURE,
        error,
    };
}

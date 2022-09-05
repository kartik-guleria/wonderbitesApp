import {
    WONDERPOINTS_LIST_REQUEST,
    WONDERPOINTS_LIST_REQUEST_SUCCESS,
    WONDERPOINTS_LIST_REQUEST_FAILURE,
    WONDERPOINTS_COUNT_REQUEST,
    WONDERPOINTS_COUNT_REQUEST_SUCCESS,
    WONDERPOINTS_COUNT_REQUEST_FAILURE
} from './constant';

export function wonderPointsListRequest(payload) {
    return {
        type: WONDERPOINTS_LIST_REQUEST,
        payload,
    };
}

export function wonderPointsListRequestSuccess(response) {
    return {
        type: WONDERPOINTS_LIST_REQUEST_SUCCESS,
        response,
    };
}

export function wonderPointsListRequestFailure(error) {
    return {
        type: WONDERPOINTS_LIST_REQUEST_FAILURE,
        error,
    };
}

export function wonderPointsCountRequest() {
    return {
        type: WONDERPOINTS_COUNT_REQUEST,
    };
}

export function wonderPointsCountRequestSuccess(response) {
    return {
        type: WONDERPOINTS_COUNT_REQUEST_SUCCESS,
        response,
    };
}

export function wonderPointsCountRequestFailure(error) {
    return {
        type: WONDERPOINTS_COUNT_REQUEST_FAILURE,
        error,
    };
}

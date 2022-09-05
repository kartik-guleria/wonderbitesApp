import {
    GET_NOTIFICATIONS_REQUEST,
    GET_NOTIFICATIONS_REQUEST_FAILURE,
    GET_NOTIFICATIONS_REQUEST_SUCCESS,
} from './constant';

export function getNotificationsRequest() {
    return {
        type: GET_NOTIFICATIONS_REQUEST,
    };
}

export function getNotificationsRequestSuccess(response) {
    return {
        type: GET_NOTIFICATIONS_REQUEST_SUCCESS,
        response,
    };
}

export function getNotificationsRequestFailure(error) {
    return {
        type: GET_NOTIFICATIONS_REQUEST_FAILURE,
        error,
    };
}
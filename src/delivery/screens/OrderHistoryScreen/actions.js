import{
    GET_PAST_ORDERS_REQUEST,
    GET_PAST_ORDERS_REQUEST_SUCCESS,
    GET_PAST_ORDERS_REQUEST_FAILURE
} from './constant';

export function getPastOrdersRequest(payload) {
    return{
        type: GET_PAST_ORDERS_REQUEST,
        payload
    };
}

export function getPastOrdersRequestSuccess(response){
    return {
        type: GET_PAST_ORDERS_REQUEST_SUCCESS,
        response,
    };
}

export function getPastOrdersRequestFailure(error){
    return{
        type: GET_PAST_ORDERS_REQUEST_FAILURE,
        error,
    };
}

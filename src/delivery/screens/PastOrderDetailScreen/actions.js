import{
    GET_PAST_ORDER_DETAIL_REQUEST,
    GET_PAST_ORDER_DETAIL_REQUEST_SUCCESS,
    GET_PAST_ORDER_DETAIL_REQUEST_FAILURE
} from './constant';

export function getPastOrderDetailRequest(payload) {
    return{
        type: GET_PAST_ORDER_DETAIL_REQUEST,
        payload
    };
}

export function getPastOrderDetailRequestSuccess(response){
    return {
        type: GET_PAST_ORDER_DETAIL_REQUEST_SUCCESS,
        response,
    };
}

export function getPastOrderDetailRequestFailure(error){
    return{
        type: GET_PAST_ORDER_DETAIL_REQUEST_FAILURE,
        error,
    };
}

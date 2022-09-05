import{
    GET_UPCOMING_ORDER_DETAIL_REQUEST,
    GET_UPCOMING_ORDER_DETAIL_REQUEST_SUCCESS,
    GET_UPCOMING_ORDER_DETAIL_REQUEST_FAILURE,

    CANCEL_ORDER_REQUEST,
    CANCEL_ORDER_REQUEST_SUCCESS,
    CANCEL_ORDER_REQUEST_FAILURE
} from './constant';

export function getUpcomingOrderDetailRequest(){
    return{
        type: GET_UPCOMING_ORDER_DETAIL_REQUEST
    };
}

export function getUpcomingOrderDetailRequestSuccess(response){
    return {
        type: GET_UPCOMING_ORDER_DETAIL_REQUEST_SUCCESS,
        response,
    };
}

export function getUpcomingOrderDetailRequestFailure(error){
    return{
        type: GET_UPCOMING_ORDER_DETAIL_REQUEST_FAILURE,
        error,
    };
}

export function cancelOrderRequest(payload){
    return{
        type: CANCEL_ORDER_REQUEST,
        payload,
    };
}

export function cancelOrderRequestSuccess(response){
    return {
        type: CANCEL_ORDER_REQUEST_SUCCESS,
        response,
    };
}

export function cancelOrderRequestFailure(error){
    return{
        type: CANCEL_ORDER_REQUEST_FAILURE,
        error,
    };
}
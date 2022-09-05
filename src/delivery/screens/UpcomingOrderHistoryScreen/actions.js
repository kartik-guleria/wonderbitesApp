import{
    GET_UPCOMING_ORDERS_REQUEST,
    GET_UPCOMING_ORDERS_REQUEST_SUCCESS,
    GET_UPCOMING_ORDERS_REQUEST_FAILURE
} from './constant';

export function getUpcomingOrdersRequest(){
    return{
        type: GET_UPCOMING_ORDERS_REQUEST
    };
}

export function getUpcomingOrdersRequestSuccess(response){
    return {
        type: GET_UPCOMING_ORDERS_REQUEST_SUCCESS,
        response,
    };
}

export function getUpcomingOrdersRequestFailure(error){
    return{
        type: GET_UPCOMING_ORDERS_REQUEST_FAILURE,
        error,
    };
}
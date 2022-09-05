import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_REQUEST_SUCCESS, GET_INGREDIENTS_REQUEST_FAILURE } from "./constants";

export function getIngredientRequest() {
    return {
        type: GET_INGREDIENTS_REQUEST,
    };
}

export function getIngredientRequestSuccess(response) {
    return {
        type: GET_INGREDIENTS_REQUEST_SUCCESS,
        response,
    };
}

export function getIngredientRequestFailure(error) {
    return {
        type: GET_INGREDIENTS_REQUEST_FAILURE,
        error,
    };
}

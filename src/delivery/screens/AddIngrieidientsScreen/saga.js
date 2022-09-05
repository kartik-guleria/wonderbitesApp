import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { GET_INGREDIENTS_REQUEST } from './constants';
import { getIngredientRequestSuccess, getIngredientRequestFailure } from './actions';
import API from 'constants/api';

function* onGetIngredientsRequest() {
    try {
        const getIngredientsResponse = yield call(axios.get, API.ADDRESS_LIST_URL);
        if (getIngredientsResponse.status === 200) {
            yield put(getIngredientRequestSuccess(getIngredientsResponse.data));
        } else {
            yield put(getIngredientRequestFailure('Server Error!'));
        }
    } catch (error) {
        if (error) yield put(getIngredientRequestFailure(error));
        else yield put(getIngredientRequestFailure('Something went wrong!'));
    }
}

function* GetIngredientsListSaga() {
    yield takeEvery(GET_INGREDIENTS_REQUEST, onGetIngredientsRequest);
}

export default GetIngredientsListSaga;

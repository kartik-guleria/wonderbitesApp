import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {DELETE_ADDRESS_REQUEST} from './constant';
import {
  deleteAddressRequestSuccess,
  deleteAddressRequestFailure,
} from './actions';
import { getAddressRequest } from 'delivery/screens/AddressListScreen/actions';
import API from 'constants/api';
function* onDeleteAddressRequest({ payload }) {

  const DELETE_ADDRESS_URL = API.DELETE_ADDRESS_URL + payload;
  try {
    const deleteAddressResponse = yield call(axios.delete, DELETE_ADDRESS_URL);
    if (deleteAddressResponse.status === 200) {
      yield put(deleteAddressRequestSuccess(deleteAddressResponse.data));
      yield put(getAddressRequest());
    } else {
      yield put(deleteAddressRequestFailure('Server Error!'));
    }
  } catch (error) {
    if (error) yield put(deleteAddressRequestFailure(error));
    else yield put(deleteAddressRequestFailure('Something went wrong!'));
  }
}

function* DeleteAddressSaga() {
  yield takeEvery(DELETE_ADDRESS_REQUEST, onDeleteAddressRequest);
}

export default DeleteAddressSaga;

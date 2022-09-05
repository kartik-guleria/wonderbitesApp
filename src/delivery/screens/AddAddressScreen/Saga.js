import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {ADD_ADDRESS_REQUEST} from './constant';
import {addAddressRequestSuccess, addAddressRequestFailure} from './actions';
import {getAddressRequest} from 'delivery/screens/AddressListScreen/actions';
import API from 'constants/api';
import { replace } from 'navigation/RootNaviagtion';
import { getUserRequest } from 'common/screens/ProfileScreen/actions';
import al from 'constants/translations/al';
function* onAddAddressRequest({ payload }) {
  console.log(payload);
  try {
    let addressUrl = payload.addressId != null
    ? API.ADD_ADDRESS_URL + '/' + payload.addressId
      : API.ADD_ADDRESS_URL;
    const addAddressResponse = yield call(
      payload.addressId != null ? axios.put : axios.post,
      addressUrl,
      payload);
    if (addAddressResponse.status === 200) {

      yield put(addAddressRequestSuccess(addAddressResponse.data));
      yield put(getUserRequest());
      yield put(getAddressRequest());
    } else {
      yield put(addAddressRequestFailure('Server Error!'));
    }
  } catch (error) {
    if (error) yield put(addAddressRequestFailure(error));
    else yield put(addAddressRequestFailure('Something went wrong!'));
  }
}

function* AddAddressSaga() {
  yield takeEvery(ADD_ADDRESS_REQUEST, onAddAddressRequest);
}

export default AddAddressSaga;

// @flow

import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { REQUEST_CARS, receiveCars } from '../actions/CarsActions';

function requestCars() {
  const url = 'http://localhost:3004/cars';
  return axios.get(url)
    .then(response => response.data)
    .catch((error) => {
      throw error;
    });
}

function* fetchCars() {
  const data = yield call(requestCars);
  yield put(receiveCars(data));
}

export default function* root() {
  yield takeLatest(REQUEST_CARS, fetchCars);
}

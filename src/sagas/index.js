// @flow

import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { REQUEST_CARS, receiveCars, GET_CAR_BY_ID, recieveCarById } from '../actions/CarsActions';

function requestCars(id) {
  const url = `http://localhost:3004/cars${id ? `/${id}` : ''}`;
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

function* fetchCarById(action) {
  const data = yield call(requestCars, action.id);
  yield put(recieveCarById(data));
}

export default function* root() {
  yield takeLatest(REQUEST_CARS, fetchCars);
  yield takeLatest(GET_CAR_BY_ID, fetchCarById);
}

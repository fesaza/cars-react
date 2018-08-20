export const REQUEST_CARS = 'REQUEST_CARS';
export const RECIEVE_CARS = 'RECIEVE_CARS';
export const FILTER_CARS = 'FILTER_CARS';
export const GET_CAR_BY_ID = 'GET_CAR_BY_ID';
export const RECIEVE_CAR_BY_ID = 'RECIEVE_CAR_BY_ID';
export const ADD_CAR_TO_COMPARE = 'ADD_CAR_TO_COMPARE';
export const REMOVE_CAR_TO_COMPARE = 'REMOVE_CAR_TO_COMPARE';

export const requestCars = featureId => (
  {
    type: REQUEST_CARS,
    featureId,
  }
);

export const receiveCars = cars => (
  {
    type: RECIEVE_CARS,
    cars,
  }
);

export const filterCars = filter => ({
  type: FILTER_CARS,
  filter,
});

export const getCarById = id => ({
  type: GET_CAR_BY_ID,
  id,
});

export const recieveCarById = car => ({
  type: RECIEVE_CAR_BY_ID,
  car,
});

export const addCarToCompare = id => ({
  type: ADD_CAR_TO_COMPARE,
  id,
});

export const removeCarToCompare = id => ({
  type: REMOVE_CAR_TO_COMPARE,
  id,
});

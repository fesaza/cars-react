export const REQUEST_CARS = 'REQUEST_CARS';
export const RECIEVE_CARS = 'RECIEVE_CARS';
export const FILTER_CARS = 'FILTER_CARS';

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

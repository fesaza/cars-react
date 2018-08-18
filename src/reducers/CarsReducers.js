import * as carsActions from '../actions/CarsActions';

const cars = (state = {
  isLoading: false,
  cars: [],
}, action) => {
  switch (action.type) {
    case carsActions.REQUEST_CARS:
      return {
        isLoading: true,
        cars: [],
      };
    case carsActions.RECIEVE_CARS:
      return {
        isLoading: false,
        cars: [...action.cars],
      };
    default:
      return state;
  }
};

export default cars;

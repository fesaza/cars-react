import _ from 'lodash';
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
        unfilteredCars: [...action.cars],
      };
    case carsActions.FILTER_CARS:
      return {
        ...state,
        cars: _.filter(state.unfilteredCars, c =>
          _.includes(_.lowerCase(c.brand), _.lowerCase(action.filter))),
      };
    default:
      return state;
  }
};

export default cars;

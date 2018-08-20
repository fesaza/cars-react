import _ from 'lodash';
import * as carsActions from '../actions/CarsActions';

const cars = (state = {
  isLoading: false,
  cars: [],
  carsToCompare: [],
}, action) => {
  switch (action.type) {
    case carsActions.REQUEST_CARS:
      return {
        ...state,
        isLoading: true,
      };
    case carsActions.RECIEVE_CARS:
      return {
        ...state,
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
    case carsActions.GET_CAR_BY_ID:
      return {
        ...state,
        selectedCar: {},
      };
    case carsActions.RECIEVE_CAR_BY_ID:
      return {
        ...state,
        selectedCar: { ...action.car },
      };
    case carsActions.ADD_CAR_TO_COMPARE:
      return {
        ...state,
        carsToCompare: _.take(_.uniqBy([
          _.head(_.filter(state.unfilteredCars, { id: action.id })),
          ...state.carsToCompare,
        ], 'id'), 3),
      };
    case carsActions.REMOVE_CAR_TO_COMPARE:
      return {
        ...state,
        carsToCompare: _.filter(state.carsToCompare, c => c.id !== action.id),
      };
    default:
      return state;
  }
};

export default cars;

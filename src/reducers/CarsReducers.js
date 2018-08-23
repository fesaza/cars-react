import _ from 'lodash';
import fp from 'lodash/fp';
import * as carsActions from '../actions/CarsActions';

/**
 * This function helps to debug lodash compose function
 */
const debugFunction = items => {
  console.log(items);
  return items;
}

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
      const concat2 = fp.concat.convert({ rearg: true });
      return {
        ...state,
        carsToCompare: fp.compose(
          //debugFunction,
          fp.take(3),
          fp.uniqBy('id'),
          concat2([...state.carsToCompare]),
          fp.filter({ id: action.id }),
        )(state.unfilteredCars)
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

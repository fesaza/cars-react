import { combineReducers } from 'redux';
import cars from './CarsReducers';

const rootReducer = combineReducers({
  cars,
});

export default rootReducer;

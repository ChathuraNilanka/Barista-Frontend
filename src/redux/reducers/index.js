import { combineReducers } from 'redux';
import { cafeReducer } from './cafeReducer';
import { employeeReducer } from './employeeReducer';

export const rootReducer = combineReducers({
  cafe: cafeReducer,
  employee: employeeReducer,
});
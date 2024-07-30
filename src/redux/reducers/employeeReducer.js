import { 
  FETCH_EMPLOYEE_BY_ID_SUCCESS, 
  FETCH_EMPLOYEE_BY_ID_FAILURE,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILURE,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAILURE
} from '../actions/actionTypes';

const initialState = {
  employees: [],
  employee: null,
  error: null,
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_SUCCESS:
      return { 
        ...state, 
        employees: action.payload 
      };
    case FETCH_EMPLOYEES_FAILURE:
      return {
        ...state,
        employees: [],
        error: action.payload,
      };
    case FETCH_EMPLOYEE_BY_ID_SUCCESS:
      return {
        ...state,
        employee: action.payload,
         error: null,
       };
    case FETCH_EMPLOYEE_BY_ID_FAILURE:
      return {
        ...state,
        employee: null,
        error: action.payload,
       };
     case UPDATE_EMPLOYEE_SUCCESS:
       return {
        ...state,
         employee: action.payload,
        error: null,
      };
    case UPDATE_EMPLOYEE_FAILURE:
      return {
        ...state,
         error: action.payload,
      };
    case ADD_EMPLOYEE_SUCCESS:
       return {
        ...state,
         employees: [...state.employees, action.payload],
        error: null,
      };
    case ADD_EMPLOYEE_FAILURE:
      return {
         ...state,
        error: action.payload,
       };
    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: [...state.employees, action.payload],
        error: null,
      };
    case DELETE_EMPLOYEE_FAILURE:
      return {
        ...state,
       error: action.payload,
      };
    default:
      return state;
  }
};
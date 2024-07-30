import { 
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  FETCH_EMPLOYEE_BY_ID,
  FETCH_EMPLOYEE_BY_ID_SUCCESS,
  FETCH_EMPLOYEE_BY_ID_FAILURE,
  UPDATE_EMPLOYEE,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILURE,
  DELETE_EMPLOYEE,
  DELETE_EMPLOYEE_SUCCESS,DELETE_EMPLOYEE_FAILURE
} from './actionTypes';

// Action to fetch all employees
export const fetchEmployees = (cafe) => ({
  type: FETCH_EMPLOYEES,
  payload: cafe,
});

// Action to be dispatched when fetching all employees is successful
export const fetchEmployeesSuccess = (employees) => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: employees,
});

// Action to be dispatched when fetching an employees
export const fetchEmployeesFailure = (error) => ({
  type: FETCH_EMPLOYEES_FAILURE,
  payload: error,
});

// Action to fetch an employee by ID
export const fetchEmployeeById = (id) => ({
  type: FETCH_EMPLOYEE_BY_ID,
  payload: id,
});

// Action to be dispatched when fetching an employee by ID is successful
export const fetchEmployeeByIdSuccess = (employee) => ({
  type: FETCH_EMPLOYEE_BY_ID_SUCCESS,
  payload: employee,
});

// Action to be dispatched when fetching an employee by ID fails
export const fetchEmployeeByIdFailure = (error) => ({
  type: FETCH_EMPLOYEE_BY_ID_FAILURE,
  payload: error,
});

// Action to update an employee
export const updateEmployee = (employee) => ({
  type: UPDATE_EMPLOYEE,
  payload: employee,
});

// Action to be dispatched when updating an employee is successful
export const updateEmployeeSuccess = (employee) => ({
  type: UPDATE_EMPLOYEE_SUCCESS,
  payload: employee,
});

// Action to be dispatched when updating an employee fails
export const updateEmployeeFailure = (error) => ({
  type: UPDATE_EMPLOYEE_FAILURE,
  payload: error,
});

// Action to add a new employee
export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

// Action to be dispatched when adding an employee is successful
export const addEmployeeSuccess = (employee) => ({
  type: ADD_EMPLOYEE_SUCCESS,
  payload: employee,
});

// Action to be dispatched when adding an employee fails
export const addEmployeeFailure = (error) => ({
  type: ADD_EMPLOYEE_FAILURE,
  payload: error,
});

// Action to delete a new employee
export const deleteEmployee = (employee) => ({
  type: DELETE_EMPLOYEE,
  payload: employee,
});

// Action to be dispatched when deleting an employee is successful
export const deleteEmployeeSuccess = (employee) => ({
  type: DELETE_EMPLOYEE_SUCCESS,
  payload: employee,
});

// Action to be dispatched when deleting an employee fails
export const deleteEmployeeFailure = (error) => ({
  type: DELETE_EMPLOYEE_FAILURE,
  payload: error,
});
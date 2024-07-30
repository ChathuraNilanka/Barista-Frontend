import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { 
  FETCH_EMPLOYEE_BY_ID,
  UPDATE_EMPLOYEE,
  ADD_EMPLOYEE,
  FETCH_EMPLOYEES,
  DELETE_EMPLOYEE
} from '../actions/actionTypes';
import { 
  fetchEmployeeByIdSuccess, 
  fetchEmployeeByIdFailure,
  updateEmployeeSuccess,
  updateEmployeeFailure,
  addEmployeeSuccess,
  addEmployeeFailure,
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
  deleteEmployeeSuccess,
  deleteEmployeeFailure
} from '../actions/employeeActions';

function* fetchEmployees(action) {
  try {
    const response = yield call(axios.get, `https://localhost:44311/api/employee?cafe=${action.payload}`);
    yield put(fetchEmployeesSuccess(response.data));
  } catch (error) {
    yield put(fetchEmployeesFailure(error.message));
  }
}

function* fetchEmployeeById(action) {
  try {
    const response = yield call(axios.get, `https://localhost:44311/api/employee/${action.payload}`);
    yield put(fetchEmployeeByIdSuccess(response.data));
  } catch (error) {
    yield put(fetchEmployeeByIdFailure(error.message));
  }
}

function* updateEmployee(action) {
  try {
    console.log(action)
    const response = yield call(axios.put, `https://localhost:44311/api/employee/${action.payload.id}`, action.payload.formData, {
      headers: {
        'Content-Type': 'application/json'
    }
    });
    yield put(updateEmployeeSuccess(response.data));
  } catch (error) {
    yield put(updateEmployeeFailure(error.message));
  }
}

function* addEmployee(action) {
  try {
    const response = yield call(axios.post, 'https://localhost:44311/api/employee', action.payload, {
      headers: {
        'Content-Type': 'application/json'
    }
    });
    yield put(addEmployeeSuccess(response.data));
  } catch (error) {
    yield put(addEmployeeFailure(error.message));
  }
}

function* deleteEmployee(action) {
  try {
    yield call(axios.delete, `https://localhost:44311/api/employee/${action.payload}`);
  } catch (error) {
    yield put(deleteEmployeeFailure(error.message));
  }
}


export function* employeeSaga() {
  yield takeLatest(FETCH_EMPLOYEES, fetchEmployees);
  yield takeLatest(FETCH_EMPLOYEE_BY_ID, fetchEmployeeById);
  yield takeLatest(UPDATE_EMPLOYEE, updateEmployee);
  yield takeLatest(ADD_EMPLOYEE, addEmployee);
  yield takeLatest(DELETE_EMPLOYEE, deleteEmployee);
}

export default employeeSaga;
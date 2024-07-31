import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { 
  FETCH_CAFES,
  FETCH_CAFE_BY_ID, 
  UPDATE_CAFE,
  ADD_CAFE, 
  DELETE_CAFE
} from '../actions/actionTypes';
import { 
  fetchCafesSuccess,
  fetchCafesFailure,
  fetchCafeByIdSuccess, 
  fetchCafeByIdFailure,
  updateCafeSuccess,
  updateCafeFailure,
  addCafeSuccess,
  addCafeFailure,
  deleteCafeFailure
} from '../actions/cafeActions';

const API = process.env.REACT_APP_API;

function* fetchCafes(action) {
  try {
    const response = yield call(axios.get, `${API}/cafe?location=${action.payload}`);
    yield put(fetchCafesSuccess(response.data));
  } catch (error) {
    yield put(fetchCafesFailure(error.message));
  }
}

function* fetchCafeById(action) {
  try {
    const response = yield call(axios.get, `${API}/cafe/${action.payload}`);
    yield put(fetchCafeByIdSuccess(response.data));
  } catch (error) {
    yield put(fetchCafeByIdFailure(error.message));
  }
}

function* updateCafe(action) {
  try {
    const response = yield call(axios.put, `${API}/cafe/${action.payload.id}`, action.payload.formData, {
      headers: {
        'Content-Type': 'application/json'
    }
    });
    yield put(updateCafeSuccess(response.data));
  } catch (error) {
    yield put(updateCafeFailure(error.message));
  }
}

function* addCafe(action) {
  try {
    const response = yield call(axios.post, `${API}/cafe`, action.payload, {
      headers: {
        'Content-Type': 'application/json'
    }
    });
    yield put(addCafeSuccess(response.data));
  } catch (error) {
    yield put(addCafeFailure(error.message));
  }
}

function* deleteCafe(action) {
  try {
    yield call(axios.delete, `${API}/cafe/${action.payload}`);
  } catch (error) {
    yield put(deleteCafeFailure(error.message));
  }
}

export function* cafeSaga() {
  yield takeLatest(FETCH_CAFES, fetchCafes);
  yield takeLatest(FETCH_CAFE_BY_ID, fetchCafeById);
  yield takeLatest(UPDATE_CAFE, updateCafe);
  yield takeLatest(ADD_CAFE, addCafe);
  yield takeLatest(DELETE_CAFE, deleteCafe);
}

export default cafeSaga;
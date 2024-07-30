import { 
  FETCH_CAFE_BY_ID, 
  FETCH_CAFE_BY_ID_SUCCESS, 
  FETCH_CAFE_BY_ID_FAILURE, 
  FETCH_CAFES, 
  FETCH_CAFES_SUCCESS,
  FETCH_CAFES_FAILURE,
  UPDATE_CAFE,
  UPDATE_CAFE_SUCCESS,
  UPDATE_CAFE_FAILURE,
  ADD_CAFE,
  ADD_CAFE_SUCCESS,
  ADD_CAFE_FAILURE,
  DELETE_CAFE,
  DELETE_CAFE_SUCCESS,
  DELETE_CAFE_FAILURE
} from './actionTypes';

// Action to fetch cafes
export const fetchCafes = (location) => ({
  type: FETCH_CAFES,
  payload: location,
});

// Action to be dispatched when fetching cafes is successful
export const fetchCafesSuccess = (cafes) => ({
  type: FETCH_CAFES_SUCCESS,
  payload: cafes,
});

// Action to be dispatched when fetching cafes fails
export const fetchCafesFailure = (error) => ({
  type: FETCH_CAFES_FAILURE,
  payload: error,
});

// Action to fetch a cafe by ID
export const fetchCafeById = (id) => ({
  type: FETCH_CAFE_BY_ID,
  payload: id,
});

// Action to be dispatched when fetching a cafe by ID is successful
export const fetchCafeByIdSuccess = (cafe) => ({
  type: FETCH_CAFE_BY_ID_SUCCESS,
  payload: cafe,
});

// Action to be dispatched when fetching a cafe by ID fails
export const fetchCafeByIdFailure = (error) => ({
  type: FETCH_CAFE_BY_ID_FAILURE,
  payload: error,
});

// Action to update a cafe
export const updateCafe = (cafe) => ({
  type: UPDATE_CAFE,
  payload: cafe,
});

// Action to be dispatched when updating a cafe is successful
export const updateCafeSuccess = (cafe) => ({
  type: UPDATE_CAFE_SUCCESS,
  payload: cafe,
});

// Action to be dispatched when updating a cafe fails
export const updateCafeFailure = (error) => ({
  type: UPDATE_CAFE_FAILURE,
  payload: error,
});

// Action to add a cafe
export const addCafe = (cafe) => ({
  type: ADD_CAFE,
  payload: cafe,
});

// Action to be dispatched when adding a cafe is successful
export const addCafeSuccess = (cafe) => ({
  type: ADD_CAFE_SUCCESS,
  payload: cafe,
});

// Action to be dispatched when adding a cafe fails
export const addCafeFailure = (error) => ({
  type: ADD_CAFE_FAILURE,
  payload: error,
});

// Action to delete a cafe
export const deleteCafe = (cafe) => ({
  type: DELETE_CAFE,
  payload: cafe,
});

// Action to be dispatched when deleting a cafe is successful
export const deleteCafeSuccess = (cafe) => ({
  type: DELETE_CAFE_SUCCESS,
  payload: cafe,
});

// Action to be dispatched when deleting a cafe fails
export const deleteCafeFailure = (error) => ({
  type: DELETE_CAFE_FAILURE,
  payload: error,
});
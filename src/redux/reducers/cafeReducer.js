import { 
  FETCH_CAFES_SUCCESS,
  FETCH_CAFES_FAILURE,
  FETCH_CAFE_BY_ID_SUCCESS, 
  FETCH_CAFE_BY_ID_FAILURE, 
  UPDATE_CAFE_SUCCESS,
  UPDATE_CAFE_FAILURE,
  ADD_CAFE_SUCCESS,
  ADD_CAFE_FAILURE,
  DELETE_CAFE_SUCCESS,
  DELETE_CAFE_FAILURE
} from '../actions/actionTypes';

const initialState = {
  cafes: [],
  cafe: null,
  error: null,
};

export const cafeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAFES_SUCCESS:
      return { 
        ...state, 
        cafes: action.payload 
      };
    case FETCH_CAFES_FAILURE:
      return {
        ...state,
        cafe: [],
        error: action.payload,
      };
    case FETCH_CAFE_BY_ID_SUCCESS:
      return {
        ...state,
        cafe: action.payload,
        error: null,
      };
    case FETCH_CAFE_BY_ID_FAILURE:
      return {
        ...state,
        cafe: null,
        error: action.payload,
      };
    case UPDATE_CAFE_SUCCESS:
      return {
        ...state,
        cafe: action.payload,
        error: null,
      };
    case UPDATE_CAFE_FAILURE:
      return {
        ...state,
        cafe: null,
        error: action.payload,
      };
    case ADD_CAFE_SUCCESS:
      return {
        ...state,
        cafes: [...state.cafes, action.payload],
        error: null,
      };
    case ADD_CAFE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_CAFE_SUCCESS:
      return {
        ...state,
        loading: false,
        cafes: state.cafes.filter(cafe => cafe.id !== action.payload),
      };
    case DELETE_CAFE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
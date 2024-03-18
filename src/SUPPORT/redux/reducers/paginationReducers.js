import { SET_PAGINATION_DATA } from '../actions/paginationActions';

const initialState = {
  currentPage: 1,
  prevPage: 0,
  nextPage: 0,
  lastPage: 0,
  perPage: 0,
  total: 0,
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGINATION_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
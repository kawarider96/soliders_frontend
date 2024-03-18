export const SET_PAGINATION_DATA = 'SET_PAGINATION_DATA';

//TODO: GLOBÁLIS PAGINATION ÁLLAPOT
export const setPaginationData = (data) => ({
  type: SET_PAGINATION_DATA,
  payload: data,
});
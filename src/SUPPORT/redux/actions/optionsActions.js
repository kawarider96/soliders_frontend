export const SET_OPTIONS = 'SET_OPTIONS';

//TODO GLOBÁLIS OPTIONS ÁLLAPOT A SELECT MEZŐKHÖZ
export const setOptions = (options) => ({
  type: SET_OPTIONS,
  payload: options,
});

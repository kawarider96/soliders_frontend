export const SET_MESSAGE = 'SET_MESSAGE';

//TODO: GLOBÁLIS MESSAGE ÁLLAPOT
export const setMessage = (content, type) => ({
  type: SET_MESSAGE,
  payload: { content, type },
});
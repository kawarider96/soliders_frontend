import { SET_OPTIONS } from '../actions/optionsActions';

const initialState = {
  options: [], 
};

export default function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_OPTIONS:
      return {
        ...state,
        options: action.payload,
      };
    default:
      return state;
  }
}
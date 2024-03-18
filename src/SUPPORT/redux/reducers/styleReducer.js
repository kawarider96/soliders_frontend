import { SET_STYLE } from "../actions/styleActions";

const initialState = {
  style:1,
};

export default function styleReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_STYLE': // Biztosítani kell, hogy a 'SET_STYLE' konstans definiálva legyen valahol
      return {
        ...state,
        style: action.payload, // Csak a `style` értékét frissítjük
      };
    default:
      return state;
  }
}
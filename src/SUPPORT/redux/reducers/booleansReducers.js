import { SET_SKILL_EDIT_MODE, SET_NAVBAR_MODE, SET_STYLE_MODE, SET_LOADING_MODE, SET_DATA_MODE } from "../actions/booleansActions";

const initialState = {
 navbarMode: false,
 styleMode: false,
 loadingMode: true,
 dataMode: false,
 skillEditMode: false,
};

export default function booleansReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NAVBAR_MODE:
            return {
                ...state,
                navbarMode: action.payload
            };
            case SET_STYLE_MODE:
            return {
                ...state,
                styleMode: action.payload
            };
            case SET_LOADING_MODE:
            return {
                ...state,
                loadingMode: action.payload
            };
            case SET_DATA_MODE:
            return {
                ...state,
                dataMode: action.payload
            }
            case SET_SKILL_EDIT_MODE:
            return {
                ...state,
                skillEditMode: action.payload
            };
        default:
            return state;
    }
}
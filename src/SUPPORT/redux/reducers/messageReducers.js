import { SET_MESSAGE } from '../actions/messageActions';

const initialState = {
    message: {
        content: null,
        type: null,
    }
   
};

export default function messageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                message: {
                    content: action.payload.content,
                    type: action.payload.type,
                }
            };
        default:
            return state;
    }
}

import initialState from './initialState'
const CREATE_MESSAGE = 'CREATE_MESSAGE';
const ALL_MESSAGES = 'ALL_MESSAGES';







export default function messageReducer(state = initialState.messages, action) {
    switch (action.type) {
        case ALL_MESSAGES:
            return action.messages;

        case CREATE_MESSAGE:
            return [
                ...state,
                Object.assign({}, action.message)
            ];

        default:
            return state;
    }
}

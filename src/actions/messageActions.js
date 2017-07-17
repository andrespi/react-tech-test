
import MessageApi from '../api/mockMessageApi';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const ALL_MESSAGES = 'ALL_MESSAGES';

export function createMessage(message) {
    return {type: CREATE_MESSAGE, message}
}

export function addMessage(message) {
    return function (dispatch) {
        return MessageApi.addMessage(message).then(message => {
            dispatch(createMessage(message));
        })
    }
}

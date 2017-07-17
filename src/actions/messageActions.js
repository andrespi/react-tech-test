import {CREATE_MESSAGE, ALL_MESSAGES} from './actionTypes';
import MessageApi from '../api/mockMessageApi';

export function createMessage(message) {
    return {type: CREATE_MESSAGE, message}
}

export function allMessages(messages) {
    return {type: ALL_MESSAGES, messages};
}


export function addMessage(message) {
    return function (dispatch) {
        return MessageApi.addMessage(message).then(message => {
            dispatch(createMessage(message));
        })
    }
}
export function getMessages() {
    return function (dispatch) {
        return MessageApi.getAllMessages().then(messages => {

            dispatch(allMessages(messages));
        })
    }
}

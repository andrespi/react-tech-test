import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import {
    createMessage,
    addMessage,
    allMessages,
    getMessages

} from './messageActions';

import {
    CREATE_MESSAGE,
    ALL_MESSAGES
} from './actionTypes';

describe('Message Actions', () => {

    describe('createMessage function', () => {
        it('should create a CREATE_MESSAGE action', () => {
            const message = {
                id: "ac10358b-d89b-31dc-0e72-e43833007d2b",
                message: 'this is a test message',
                isPrivate: false
            };
            const expectedAction = {
                type: CREATE_MESSAGE,
                message: message
            };

            const action = createMessage(message);
            expect(action).toEqual(expectedAction);
        });
    });

    describe('allMessages function', () => {
        it('should create a ALL_MESSAGE action', () => {
            const messages = [
                {
                    id: "c271259a-c3b0-02e4-1231-3c29ec02beb8",
                    message: "first message",
                    isPrivate: true
                },
                {
                    id: "9e485cd6-a5c0-3621-f532-eb58fb654ada",
                    message: "second message",
                    isPrivate: false
                },
            ];

            const expectedAction = {
                type: ALL_MESSAGES,
                messages: messages
            };

            const action = allMessages(messages);
            expect(action).toEqual(expectedAction);
        });
    });
});


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Message Async Actions', () => {
    describe('getMessages function', () => {

        it('should create ALL_MESSAGES when called', () => {
            expect.assertions(1);

            const expectedAction = [
                {type: ALL_MESSAGES, body: {
                    messages: [
                        {
                            id: "c271259a-c3b0-02e4-1231-3c29ec02beb8",
                            message: "first message",
                            isPrivate: true
                        }]
                }}
            ];

            const store = mockStore({messages: []}, expectedAction);
            return store.dispatch(getMessages()).then( ()=> {
                const actions = store.getActions();
                expect(actions[0].type).toEqual(ALL_MESSAGES);
            })
        });
    });

    describe('addMessage function', () => {

        it('should create CREATE_MESSAGE when called', () => {
            expect.assertions(1);

            const message = {
                id: "c271259a-c3b0-02e4-1231-3c29ec02beb8",
                message: "first message",
                isPrivate: true
            };

            const expectedAction = [
                {type: CREATE_MESSAGE, body: {
                    message: {
                        id: "c271259a-c3b0-02e4-1231-3c29ec02beb8",
                        message: "first message",
                        isPrivate: true
                    }
                }}
            ];

            const store = mockStore({messages: []}, expectedAction);

            return store.dispatch(addMessage(message)).then( () => {
                const actions = store.getActions();

                expect(actions[0].type).toEqual(CREATE_MESSAGE);
            })

        })
    })

});


import messageReducer from './messageReducer';

describe('Message Reducer', () => {

    it('should handle initial state', () => {
        expect(
            messageReducer(undefined, {})
        ).toEqual([]);
    });

    it('should handle ALL_MESSAGES', () => {

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
            }
        ];

        expect(
            messageReducer([], {
                type: 'ALL_MESSAGES',
                messages: messages
            })
        ).toEqual(
            messages
        );
    });

    it('should handle CREATE_MESSAGE', () => {
        const initialState = [
            {
                id: "c271259a-c3b0-02e4-1231-3c29ec02beb8",
                message: "first message",
                isPrivate: true
            },
            {
                id: "9e485cd6-a5c0-3621-f532-eb58fb654ada",
                message: "second message",
                isPrivate: false
            }
        ];

        const newMessage = {
            id: "ba98e0d7-40a9-8965-1416-ef1193a59312",
            message: "third message",
            isPrivate: true
        };

        expect(
            messageReducer(
                initialState, {
                    type: 'CREATE_MESSAGE',
                    message: newMessage
                })
        ).toEqual(
            [
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
                {
                    id: "ba98e0d7-40a9-8965-1416-ef1193a59312",
                    message: "third message",
                    isPrivate: true
                }
            ]
        )
    });
});

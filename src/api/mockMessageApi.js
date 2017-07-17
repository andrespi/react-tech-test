const delay = 100;

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
    {
        id: "ba98e0d7-40a9-8965-1416-ef1193a59312",
        message: "third message",
        isPrivate: true
    },
    {
        id: "5037fe85-719b-db8a-a65a-9d7fa36ddc35",
        message: "Fourth message",
        isPrivate: true
    },
    {
        id: "cbebbdcd-b86f-baff-7b8d-a2bedf5dbb74",
        message: "fifth message",
        isPrivate: false
    },
];

// generate a unique id alike
function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

// an api mock with Promise for easy transition to a real one
class MessageApi {

    static getAllMessages() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], messages))
            }, delay)
        });
    }

    static addMessage(message) {
        message = Object.assign({}, message);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                message.id = guid();
               // messages.push(message);
                resolve(message);
            }, delay)
        })
    }
}

export default MessageApi;

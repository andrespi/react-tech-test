
const delay = 100;

function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}
class MessageApi {

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

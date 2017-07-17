
const delay = 100;

class MessageApi {

    static addMessage(message) {
        message = Object.assign({}, message);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                message.id = guid();
                messages.push(message);
                resolve(message);
            }, delay)
        })
    }
}

export default MessageApi;

import React from 'react';
import MessageListRow from './MessageListRow';

const MessageList = ({messages}) => {

    return (
        <table className="table">
            <thead>
            <tr>
                <th>Message</th>
                <th>Privé</th>
            </tr>
            </thead>
            <tbody>
            {messages.map(message =>
                <MessageListRow key={message.id} message={message}/>
            )}
            </tbody>
        </table>
    );
};


export default MessageList;

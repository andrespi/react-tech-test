import React from 'react';
import MessageListRow from './MessageListRow';
import PropTypes from 'prop-types';

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

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MessageList;


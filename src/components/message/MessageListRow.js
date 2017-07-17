import React from 'react';

const MessageListRow = ({message}) => {
    return (
        <tr>
            <td>{message.message}</td>
            <td>{message.isPrivate ? 'oui' : 'non'}</td>
        </tr>
    );
};


export default MessageListRow;

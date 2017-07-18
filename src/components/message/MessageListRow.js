import React from 'react';
import PropTypes from 'prop-types';

const MessageListRow = ({message}) => {
    return (
        <tr>
            <td>{message.message}</td>
            <td>{message.isPrivate ? 'oui' : 'non'}</td>
        </tr>
    );
};

MessageListRow.propsTypes = {
    message: PropTypes.object.isRequired
};

export default MessageListRow;

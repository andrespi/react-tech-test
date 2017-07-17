import React from 'react';
import TextInput from '../common/TextInput';

const MessageForm = ({message, onSave, onChange}) => {
    return (
        <form>
            <h1>Ajouter un message</h1>
            <TextInput
                name="message"
                label="Message"
                value={message.message}
                onChange={onChange}
            />


            <input
                type="submit"
                value={'Ajouter un message' }
                className="btn btn-primary"
                onClick={onSave}
            />
        </form>
    );
};

export default MessageForm;

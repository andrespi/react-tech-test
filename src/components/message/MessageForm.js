import React from 'react';
import TextInput from '../common/TextInput';
import CheckBox from '../common/CheckBox';

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
            <CheckBox
                name="private"
                label="Privé"
                onChange={onChange}
            />

            <input
                type="submit"
                value='Sauvegarder'
                className="btn btn-primary"
                onClick={onSave}
            />
        </form>
    );
};

export default MessageForm;

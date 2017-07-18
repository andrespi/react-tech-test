import React from 'react';
import TextInput from '../common/TextInput';
import CheckBox from '../common/CheckBox';
import PropTypes from 'prop-types';

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

MessageForm.propTypes = {
    message: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default MessageForm;

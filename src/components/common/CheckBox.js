import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({name, label, onChange}) => {

    return (
        <div style={{marginBottom: '20px'}} >
            <label htmlFor={name} >
                <input
                    name="isPrivate"
                    type="checkbox"
                    onChange={onChange}
                    style={{marginRight: '10px'}}
                />
                {label}
            </label>
        </div>
    );
};

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};


export default CheckBox;





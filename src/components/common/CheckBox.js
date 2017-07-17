import React from 'react';

const CheckBox = ({name, label, onChange, value}) => {

    return (
        <div style={{marginBottom: '20px'}} >
            <label htmlFor={name} >
                <input
                    name="isPrivate"
                    type="checkbox"
                    onChange={onChange}
                    value={value}
                    style={{marginRight: '10px'}}
                />
                {label}
            </label>
        </div>
    );
};

export default CheckBox;





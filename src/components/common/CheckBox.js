import React from 'react';

const CheckBox = ({name, label, onChange, value}) => {

    return (
        <span>
        <label htmlFor={name}>
          <input
              type="checkbox"
              onChange={onChange}
              value={value}
          />
            {label}
        </label>
      </span>
    );
};

export default CheckBox;





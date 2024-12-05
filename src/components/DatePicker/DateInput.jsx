// DateInput.js
import React from 'react';

const DateInput = ({ label, value, onChange, customStyles }) => {
    return (
        <div>
            <label>{label}:</label>
            <input
                type="date"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={customStyles.input}
            />
        </div>
    );
};

export default DateInput;

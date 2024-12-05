import React from 'react';

const DateInput = ({ value, onChange, styles }) => {
    return (
        <input
            type="date"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={styles}
        />
    );
};

export default DateInput;

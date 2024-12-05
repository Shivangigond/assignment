import React from 'react';
import DateInput from './DateInput';

const CustomDateRange = ({ onRangeChange, startDate, endDate, styles }) => {
    const handleStartDateChange = (date) => {
        if (new Date(date) <= new Date(endDate) || !endDate) {
            onRangeChange(date, endDate);
        }
    };

    const handleEndDateChange = (date) => {
        if (new Date(date) >= new Date(startDate) || !startDate) {
            onRangeChange(startDate, date);
        }
    };

    return (
        <div>
            <label style={styles.label}>From:</label>
            <DateInput
                value={startDate}
                onChange={handleStartDateChange}
                styles={styles.inputField}
            />
            <label style={styles.label}>To:</label>
            <DateInput
                value={endDate}
                onChange={handleEndDateChange}
                styles={styles.inputField}
            />
        </div>
    );
};

export default CustomDateRange;

// CustomDateRange.js
import React, { useEffect } from 'react';
import DateInput from './DateInput';

const CustomDateRange = ({ startDate, endDate, setStartDate, setEndDate, customStyles }) => {
    const handleStartDateChange = (date) => {
        if (new Date(date) <= new Date(endDate)) {
            setStartDate(date);
        }
    };

    const handleEndDateChange = (date) => {
        if (new Date(date) >= new Date(startDate)) {
            setEndDate(date);
        }
    };

    return (
        <div>
            <DateInput
                label="From"
                value={startDate}
                onChange={handleStartDateChange}
                customStyles={customStyles}
            />
            <DateInput
                label="To"
                value={endDate}
                onChange={handleEndDateChange}
                customStyles={customStyles}
            />
        </div>
    );
};

export default CustomDateRange;

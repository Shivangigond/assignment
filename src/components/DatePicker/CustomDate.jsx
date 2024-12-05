// App.js (Parent Component)
import React from 'react';
import DatePickerContainer from './DatePickerContainer';

const CustomDate = () => {
    const handleDateChange = (dateRange) => {
        console.log('Selected Date Range:', dateRange);
    };

    const customStyles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f4f4f4',
            padding: '20px',
            borderRadius: '8px',
        },
        input: {
            fontSize: '14px',
            padding: '5px',
            marginBottom: '10px',
        },
        button: {
            backgroundColor: '#007BFF',
            color: 'white',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            margin: '5px',
        },
        activeButton: {
            backgroundColor: '#0056b3',
        },
    };

    return (
        <div>
            <h1>Custom Date Picker</h1>
            <DatePickerContainer onDateChange={handleDateChange} customStyles={customStyles} />
        </div>
    );
};

export default CustomDate;

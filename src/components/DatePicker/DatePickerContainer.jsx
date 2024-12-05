// DatePickerContainer.js
import React, { useState, useEffect } from 'react';
import PresetButtons from './PresetButtons';
import CustomDateRange from './CustomDateRange';
import DateInput from './DateInput';

const DatePickerContainer = ({ onDateChange, customStyles }) => {
    const [selectedPreset, setSelectedPreset] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        if (selectedPreset === 'CustomRange' && startDate && endDate) {
            onDateChange({ startDate, endDate });
        } else if (selectedPreset) {
            onDateChange({ selectedPreset });
        }
    }, [selectedPreset, startDate, endDate, onDateChange]);

    const handlePresetClick = (preset) => {
        setSelectedPreset(preset);
        if (preset === 'Today') {
            const today = new Date().toISOString().split('T')[0];
            setStartDate(today);
            setEndDate(today);
        } else if (preset === 'Yesterday') {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const formattedDate = yesterday.toISOString().split('T')[0];
            setStartDate(formattedDate);
            setEndDate(formattedDate);
        } else if (preset === 'ThisMonth') {
            const now = new Date();
            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
            const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
            setStartDate(startOfMonth);
            setEndDate(endOfMonth);
        } else if (preset === 'LastMonth') {
            const now = new Date();
            const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1).toISOString().split('T')[0];
            const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).toISOString().split('T')[0];
            setStartDate(startOfLastMonth);
            setEndDate(endOfLastMonth);
        } else if (preset === 'CustomRange') {
            setStartDate('');
            setEndDate('');
        }
    };

    return (
        <div style={customStyles.container}>
            <PresetButtons handlePresetClick={handlePresetClick} />
            {selectedPreset === 'CustomRange' && (
                <CustomDateRange
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                    customStyles={customStyles}
                />
            )}
        </div>
    );
};

export default DatePickerContainer;

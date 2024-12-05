import React, { useState } from 'react';
import PresetButtons from './PresetButtons';
import CustomDateRange from './CustomDateRange';
import DatePickerStyles from '../../styles/DatePickerStyles';

const DatePickerContainer = ({ onDateChange }) => {
    const [selectedPreset, setSelectedPreset] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handlePresetClick = (preset) => {
        const today = new Date();
        let start = '';
        let end = '';

        if (preset === 'Today') {
            start = end = today.toISOString().split('T')[0];
        } else if (preset === 'Yesterday') {
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            start = end = yesterday.toISOString().split('T')[0];
        } else if (preset === 'This Month') {
            start = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0];
            end = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().split('T')[0];
        } else if (preset === 'Last Month') {
            start = new Date(today.getFullYear(), today.getMonth() - 1, 1).toISOString().split('T')[0];
            end = new Date(today.getFullYear(), today.getMonth(), 0).toISOString().split('T')[0];
        }

        setSelectedPreset(preset);
        setStartDate(start);
        setEndDate(end);

        if (onDateChange) onDateChange({ startDate: start, endDate: end });
    };

    const handleCustomRangeChange = (start, end) => {
        setSelectedPreset('Custom Range');
        setStartDate(start);
        setEndDate(end);

        if (onDateChange) onDateChange({ startDate: start, endDate: end });
    };

    return (
        <div style={DatePickerStyles.container}>
            <PresetButtons
                onPresetClick={handlePresetClick}
                selectedPreset={selectedPreset}
                styles={DatePickerStyles}
            />
            {selectedPreset === 'Custom Range' && (
                <CustomDateRange
                    onRangeChange={handleCustomRangeChange}
                    startDate={startDate}
                    endDate={endDate}
                    styles={DatePickerStyles}
                />
            )}
        </div>
    );
};

export default DatePickerContainer;

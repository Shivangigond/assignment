// PresetButtons.js
import React from 'react';

const PresetButtons = ({ handlePresetClick }) => {
    return (
        <div>
            <button onClick={() => handlePresetClick('Today')}>Today</button>
            <button onClick={() => handlePresetClick('Yesterday')}>Yesterday</button>
            <button onClick={() => handlePresetClick('ThisMonth')}>This Month</button>
            <button onClick={() => handlePresetClick('LastMonth')}>Last Month</button>
            <button onClick={() => handlePresetClick('CustomRange')}>Custom Range</button>
        </div>
    );
};

export default PresetButtons;

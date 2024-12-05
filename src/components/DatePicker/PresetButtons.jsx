import React from 'react';

const PresetButtons = ({ onPresetClick, selectedPreset, styles }) => {
    const presets = ['Today', 'Yesterday', 'This Month', 'Last Month', 'Custom Range'];

    return (
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            {presets.map((preset) => (
                <button
                    key={preset}
                    onClick={() => onPresetClick(preset)}
                    style={{
                        ...styles.presetButton,
                        ...(selectedPreset === preset ? styles.activeButton : {}),
                    }}
                >
                    {preset}
                </button>
            ))}
        </div>
    );
};

export default PresetButtons;

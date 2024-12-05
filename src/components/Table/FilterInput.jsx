import React from "react";

const FilterInput = ({ column, onChange }) => {
    return (
        <div className="filter">
            <label>{column.title} Filter:</label>
            <input
                type="text"
                onChange={(e) => onChange(column.key, e.target.value)}
                placeholder={`Filter ${column.title}`}
            />
        </div>
    );
};

export default FilterInput;

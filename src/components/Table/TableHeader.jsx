import React from 'react';
import tableStyles from '../../styles/tableStyles';

const TableHeader = ({ colDefs, handleSort, sortConfig, handleFilterChange, filters }) => {
    return (
        <thead>
            <tr>
                {colDefs.map((col, index) => (
                    <th
                        key={index}
                        onClick={() => col.sortable && handleSort(col.field)}
                        style={tableStyles.th}
                    >
                        {col.field.toUpperCase()}
                        {col.sortable && (
                            <span>
                                {sortConfig.field === col.field
                                    ? sortConfig.direction === 'asc'
                                        ? ' ▲'
                                        : ' ▼'
                                    : ''}
                            </span>
                        )}
                        {col.filter && (
                            <input
                                type="text"
                                placeholder={`Filter ${col.field}`}
                                onChange={(e) => handleFilterChange(col.field, e.target.value)}
                                value={filters[col.field] || ''}
                                style={tableStyles.filterInput}
                            />
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;

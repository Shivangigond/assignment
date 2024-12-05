import React, { useState } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const CustomTable = () => {
    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
        { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
        { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: 'make', filter: true, sortable: true },
        { field: 'model', filter: true, sortable: true },
        { field: 'price', filter: true, sortable: true },
        { field: 'electric', filter: true, sortable: true },
    ]);

    // Filters for each column
    const [filters, setFilters] = useState({});

    // Sort state
    const [sortConfig, setSortConfig] = useState({ field: null, direction: null });

    // Handle filter changes
    const handleFilterChange = (field, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [field]: value,
        }));
    };

    // Handle sort changes
    const handleSort = (field) => {
        setSortConfig((prevSortConfig) => {
            if (prevSortConfig.field === field) {
                // Toggle sort direction
                const nextDirection =
                    prevSortConfig.direction === 'asc'
                        ? 'desc'
                        : prevSortConfig.direction === 'desc'
                            ? null
                            : 'asc';
                return { field, direction: nextDirection };
            }
            return { field, direction: 'asc' };
        });
    };

    // Apply filters to row data
    const filteredData = rowData.filter((row) => {
        return colDefs.every((col) => {
            if (!col.filter || !filters[col.field]) {
                return true; // Skip filtering if no filter is applied
            }
            const fieldValue = row[col.field];
            const filterValue = filters[col.field].toString().toLowerCase();
            return fieldValue.toString().toLowerCase().includes(filterValue);
        });
    });

    // Apply sorting to filtered data
    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortConfig.field || !sortConfig.direction) {
            return 0; // No sorting applied
        }
        const field = sortConfig.field;
        const direction = sortConfig.direction === 'asc' ? 1 : -1;
        if (a[field] < b[field]) return -1 * direction;
        if (a[field] > b[field]) return 1 * direction;
        return 0;
    });

    return (
        <div>
            <h2>Custom Table with Filters and Sorting</h2>
            <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <TableHeader
                    colDefs={colDefs}
                    handleSort={handleSort}
                    sortConfig={sortConfig}
                    handleFilterChange={handleFilterChange}
                    filters={filters}
                />
                <TableBody colDefs={colDefs} rowData={sortedData} />
            </table>
        </div>
    );
};

export default CustomTable;

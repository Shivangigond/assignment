import React, { useState, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import FilterInput from "./FilterInput";

const TableContainer = ({ data, columns }) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
    const [filters, setFilters] = useState({});

    const sortedData = useMemo(() => {
        let sorted = [...data];
        if (sortConfig.key) {
            sorted.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
                if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
                return 0;
            });
        }
        return sorted;
    }, [data, sortConfig]);

    const filteredData = useMemo(() => {
        return sortedData.filter(row => {
            return Object.keys(filters).every(key => {
                if (!filters[key]) return true;
                return row[key].toString().toLowerCase().includes(filters[key].toLowerCase());
            });
        });
    }, [sortedData, filters]);

    const handleSort = key => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    };

    const handleFilterChange = (key, value) => {
        setFilters(prevFilters => ({ ...prevFilters, [key]: value }));
    };

    return (
        <div className="table-container">
            {columns.map(col => col.filterable && (
                <FilterInput key={col.key} column={col} onChange={handleFilterChange} />
            ))}
            <table>
                <TableHeader columns={columns} onSort={handleSort} sortConfig={sortConfig} />
                <TableBody data={filteredData} columns={columns} />
            </table>
        </div>
    );
};

export default TableContainer;

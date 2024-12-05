import React from 'react';

const TableBody = ({ colDefs, rowData }) => {
    return (
        <tbody>
            {rowData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {colDefs.map((col, colIndex) => (
                        <td key={colIndex}>
                            {typeof row[col.field] === 'boolean'
                                ? row[col.field]
                                    ? 'Yes'
                                    : 'No'
                                : row[col.field]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;

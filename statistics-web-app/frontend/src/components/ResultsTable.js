import React from 'react';

const ResultsTable = () => {
    return (
        <div>
            <h2>Tabulka výsledků</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Hodnota</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ResultsTable;

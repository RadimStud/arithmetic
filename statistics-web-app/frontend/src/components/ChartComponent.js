import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
    const chartData = {
        labels: data.map((_, index) => `Data ${index + 1}`), // Popisky dat (např. Data 1, Data 2,...)
        datasets: [
            {
                label: 'Generovaná Data',
                data: data,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderWidth: 2,
                tension: 0.4, // Vyhlazení čar
            },
        ],
    };

    return (
        <div>
            <h2>Graf generovaných dat</h2>
            {data.length > 0 ? (
                <Line data={chartData} />
            ) : (
                <p>Nejsou k dispozici žádná data</p>
            )}
        </div>
    );
};

export default ChartComponent;

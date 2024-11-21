import React from 'react';
import InputForm from './components/InputForm';
import ChartComponent from './components/ChartComponent';
import ResultsTable from './components/ResultsTable';

function App() {
    return (
        <div>
            <h1>Statistics Web App</h1>
            <InputForm setData={setData} />
            <ChartComponent data={data} />
            <ResultsTable />
        </div>
    );
}

export default App;

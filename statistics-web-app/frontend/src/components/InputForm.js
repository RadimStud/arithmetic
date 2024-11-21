import React, { useState } from 'react';

const InputForm = ({ setData }) => {
    const [input, setInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://127.0.0.1:5000/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ count: Number(input) }),
        });

        const result = await response.json();
        setData(result.data); // Uložíme data pro graf
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Zadejte počet čísel"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Generovat</button>
        </form>
    );
};

export default InputForm;

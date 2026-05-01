import React, { useState } from 'react';

const Challenge = (x, y) => {
    const value1 = x;
    const value2 = y;
    const [result, setResult] = useState(0);

    const handleSum = () => {
        setResult(value1 + value2);
    };

    return (
    <div>
        <h1>Challenge</h1>
        <p>Valor 1: {value1}</p>
        <p>Valor 2: {value2}</p>
        <button onClick={handleSum}>Somar</button>
        <p>Resultado: {result}</p>
    </div>

    );
};
export default Challenge;
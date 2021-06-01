import React, { useState } from 'react';

console.log('Capturar un evento');

const ContadorApp = ({ valor_incremento }) => {
    console.log('Componente de Incremento');

    const [incremento, setIncremento] = useState(valor_incremento);

    const clickUsuIncremento = () => {
        setIncremento(incremento + 1);
    }

    const clickUsuReinicio = () => {
        setIncremento(0);
    }

    const clickUsuDecremento = () => {
        setIncremento(incremento - 1);
    }

    return (
        <>
            <h1>Ejercicio de Contador!</h1>
            <h5>Contador = {incremento}</h5>
            <hr></hr>
            <button onClick={clickUsuDecremento}>Pica Aquí! Para Decrementar 1</button>
            <button onClick={clickUsuReinicio}>Pica Aquí! Para Reiniciar</button>
            <button onClick={clickUsuIncremento}>Pica Aquí! Para Incrementar 1</button>

        </>
    );
}

export default ContadorApp;
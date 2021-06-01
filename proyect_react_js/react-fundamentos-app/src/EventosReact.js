import React from 'react';

console.log('Capturar un evento');

const EventosReact = () => {
    console.log('Componente Evento');

    const clickUsu = () =>{
        alert('Hola Mundon!');
    }

    return (
        <>
            <h1>Hola mundo desde React JS, Utilizando un Componente Flecha!</h1>
            <h5>Retorno multilinea</h5>
            <hr></hr>
            <button onClick={clickUsu}>Pica Aquí!</button>
        </>
    );
}

export default EventosReact;
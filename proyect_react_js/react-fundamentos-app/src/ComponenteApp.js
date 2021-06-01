import React from 'react';

const persona = {
    id: 1578,
    nombre: 'Juan Camilo',
    edad: 22
}

const ComponentApp = (props) => {
    console.log('Compoente Obj con Parametros con props');
    console.log('Parametro 1:', props.param_01);
    console.log('Parametro 2:', props.param_02);
    console.log('Parametro 3:', props.param_03);
    return (
        <>
            <h1>Hola mundo desde React JS, Utilizando un Componente Flecha!</h1>
            <h5>Retorno multilinea</h5>
            <hr></hr>
            <p>Hola mundo desde React JS, Utilizando un Componente Flecha!</p>
            <p>Retorno multilinea</p>
            <hr></hr>
            <p>Obj Persona: Id: {persona.id} | Nom: {persona.nombre} | Edad: {persona.edad}</p>
            <p>Formato JSON:</p>
            <p>{JSON.stringify(persona, null, null)}</p>
            <hr></hr>
            <p>Multiparametros (props):</p>
            <p>Parametro 1 = {props.param_01}</p>
            <p>Parametro 2 = {props.param_02}</p>
            <p>Parametro 3 = {props.param_03}</p>
        </>
    );
}

ComponentApp.defaultProps = {
    param_03: 'Sin Valor'
}

export default ComponentApp;
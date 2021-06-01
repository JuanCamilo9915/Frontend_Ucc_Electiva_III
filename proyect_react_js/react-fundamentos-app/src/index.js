import React from 'react';
import ReactDOM from 'react-dom';

//Importando Componentes de la App:
import ComponentApp from './ComponenteApp.js';
import EventosReact from './EventosReact.js';
import ContadorApp from './ContadorApp';

//Importando los Estilos CSS:
import './index.css';

const divRoot = document.getElementById('root');

//ReactDOM.render(<ComponentApp param_01 = '0001' param_02 = 'Hola :)'/>, divRoot);
ReactDOM.render(<ContadorApp valor_incremento = {0} />, divRoot);
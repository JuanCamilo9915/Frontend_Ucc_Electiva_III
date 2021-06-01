//console.log('Hola Mundo!');
//console.log('Primer App utilizando React JS');
//console.log('Numero Randomico: ',Math.random());
//document.write('Hola Mundo! <br>');
//document.write('Primer App utilizando React JS');

/**************************************************************************************************************************/

/*Clase del 15/04/2021*/
console.log('Alcance de Variables:');

var variableGlobal = 'Variable de alcance global';
let variableBloque = 'Variable de alcance limitado';
const variableUnica = 'Variable de alcance Único';
let string = 'ABC';
let num = 123;

console.log('Variable Global: ' + variableGlobal);
console.log('Variable Bloque: ' + variableBloque);
console.log('Variable Constante: ' + variableUnica);

{
    variableGlobal = 1799;
    console.log('Variable Global 2: ' + variableGlobal);
    let variableBloque = 'DEF';
    console.log('Variable Bloque 2: ' + variableBloque);
}
console.log('*---------------------If-Else------------------------------*');
let controlador = true;

if (controlador) {
    console.log('Dentro del If');
    let x = 15;
    let y = 7;

    console.log('Operación: ' + x * y);
} else {
    console.log('Dentro del Else del If');
}

console.log('*---------------------Switch------------------------------*');
let valor = 50;

switch (valor) {
    case 1: case 2: case 3:
        console.log('Caso: 1-2-3');
        break;

    case 4: case 7: case 20:
        console.log('Caso: 4-7-20');
        break;

    case 50:
        console.log('Caso: 50');
        break;

    default:
        console.log('Valor Incorrecto');
        break;
}
/*
switch (valor) {
    case 1:
    case 2:
    case 3:
        console.log('Caso: 1-2-3');
        break;

    case 4:
    case 7:
    case 20:
        console.log('Caso: 4-7-20');
        break;

    case 50:
        console.log('Caso: 50');
        break;

    default:
        console.log('Valor Incorrecto');
        break;
}*/
console.log('*---------------------Bucle Do While------------------------------*');

let incremento = 10;
let contador = 0;

console.log('Contador: '+contador);

do {
    contador++;
    console.log('Contador: '+contador);
} while (contador < incremento);

console.log('*---------------------Bucle While------------------------------*');

let iterador = true;
let contadorBucle = 0;
let acumulador = 0;

while (iterador) {
    let numRandom = Math.random() * 10;
    console.log('numRandom: ' + numRandom);

    acumulador += numRandom;
    contadorBucle++;

    if (numRandom > 8) {
        iterador = false;
        console.log('*---------------------------------------------------*');
        console.log('Saliendo del Bucle');
        console.log('*---------------------------------------------------*');
        console.log('Cantidad de veces que itero: ' + contadorBucle);
        console.log('Acumulador: ' + acumulador);
    }
}
console.log('*---------------------Bucle For------------------------------*');

let limite = 20;

for (let i = 0; i < limite; i++) {
  let numRandomFor = Number.parseInt((Math.random()*10),10);
  console.log('Contador For: '+i);
  console.log('Numero aleatorio: '+numRandomFor);
}
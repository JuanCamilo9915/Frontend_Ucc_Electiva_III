console.log('---------String Template----------');

const apellido = 'González';
let nombre = 'Juan Camilo';

let numero = 17;

let result;

let valor1 = 1, valor2 = 3;

console.log('Señor:' + apellido + ', su multiplicación es: ' + (numero * 7));

console.log(`Señor: 
${nombre,
    apellido}, su 
multiplicación es: 
${(numero * 7)}`);

console.log(`Ejecutando la siguiente función: ${suma('${valor1}','${valor2}')}`);

function sumar(v1,v2){
    return `Valor 1: ${v1}, valor: 2: ${v2} la suma es: ${v1 + v2}`;
}
console.log("--------------------------Ejercicio # 5-----------------------------------------");
console.log("--------------Identificar si el Digito es Mayor en el Numero--------------------");

let readline = require('readline');

let datoLinea = readline.createInterface(
    process.stdin, process.stdout
);

let datoReferencia = 0;
let datoMayor;

datoLinea.question('Ingresar un numero de mínimo 2 cifras: ', (numDigitado) => {

    datoReferencia = numDigitado.toString().trim();

    datoMayor = Math.max(...datoReferencia);

    console.log("\n-------------------------Resultado-----------------------------------------");
    console.log(`El digito: ${datoMayor}, es el mayor del numero ingresado: ${datoReferencia}`);

    process.exit();
});
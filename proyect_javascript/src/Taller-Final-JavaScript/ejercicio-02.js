console.log("--------------------------Ejercicio # 2-----------------------------------------");
console.log("-------------------Suma de los Digitos de un numero-----------------------------");
process.stdout.write('Ingresar un numero de mínimo 2 cifras: ');

let readline = require('readline');

let datoLinea = readline.createInterface(
    process.stdin, process.stdout
);

let digitos;
let sumaDigitos = 0;

datoLinea.question('Ingresar un numero de mínimo 2 cifras: ', (numDigitado) =>{

    numDigitado.toString().trim();

    digitos = [...numDigitado];

    digitos.forEach(digitNum => {
        sumaDigitos += parseInt(digitNum);
    });

    console.log("\n-------------------------Resultado-----------------------------------------")
    console.log(`la suma de los digitos es: ${sumaDigitos}`);
    datoLinea.close();
});
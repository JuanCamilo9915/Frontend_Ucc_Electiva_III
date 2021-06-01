console.log("--------------------------Ejercicio # 4-----------------------------------------");
console.log("---------------Identificar si el Digito Existe en el Numero---------------------");

let readline = require('readline');

let datoLinea = readline.createInterface(
    process.stdin, process.stdout
);

let datoContador = 0;
let j = 0;
let vlrDatoComparar = 0;

datoLinea.question('Ingresar un numero de mínimo 2 cifras: ', (numDigitado) => {

    datoContador = numDigitado.toString().trim();

    datoLinea.setPrompt('Ingresar digito a buscar: ');
    datoLinea.prompt();

});

datoLinea.on('line', (datoComparar) => {

    if (datoComparar === 'si') {

        console.log("\n-------------------------Resultado-----------------------------------------");

        switch (j) {
            case 0:
                console.log(`El numero buscado: ${vlrDatoComparar}, NO está
                en el numero ingresado: ${datoContador}`);
                break;

            default:
                console.log(`El numero buscado: ${vlrDatoComparar}, SI está
                en el numero ingresado: ${datoContador}`);
                break;
        }
        process.exit();
    }

    datoContador.split('');

    console.log('datoComparar: ' + datoComparar);
    vlrDatoComparar = datoComparar;

    for (let i = 0; i < datoContador.length; i++) {

        if (datoComparar == datoContador[i]) {
            j = 1;
        }

    }

    datoLinea.setPrompt(`¿Si desea terminar la ejecución para ver el resultado,
                        ingrese la palabra "si"?: `);
    datoLinea.prompt();
});
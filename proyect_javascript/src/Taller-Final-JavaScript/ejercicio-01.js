console.log("--------------------------Ejercicio # 1-----------------------------------------");
console.log("--------------------Invertir Orden De los Digitos-------------------------------");
process.stdout.write('Digitar un numero de 2 cifras como mínimo: ');

let stdin = process.openStdin();

stdin.addListener('data', function (numDigitado) {

        let numParseado = parseInt(numDigitado);

        console.log("\n-------------------------Resultado-----------------------------------------");
        console.log(`Se han invertido los digitos del numero, quedando así: 
                ${numParseado
                        .toString()
                        .split('')
                        .reverse()
                        .join('')
                        .trim()}`);

        process.exit();

});
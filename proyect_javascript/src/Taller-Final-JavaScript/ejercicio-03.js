console.log("--------------------------Ejercicio # 3-----------------------------------------");
console.log("-----------------Identificar Numeros Capicuos o Palíndromos---------------------");
process.stdout.write('Digitar un numero para saber si es Palíndromo: ');

let stdin = process.openStdin();

let numInvertido = 0;

stdin.addListener('data', function (numDigitado) {

        let numParseado = parseInt(numDigitado);

        numInvertido = numParseado.toString()
                        .split('')
                        .reverse()
                        .join('')
                        .trim();

        console.log("\n-------------------------Resultado-----------------------------------------");

        if (numParseado == numInvertido) {
            console.log(`Numero Digitado: ${numParseado} = Numero Invertido: ${numInvertido}`);
            console.log(`Por lo anterior se puede decir que Es un numero Capicúa(Palíndromo)`);
        }else{
            console.log(`Numero Digitado: ${numParseado} != Numero Invertido: ${numInvertido}`);
            console.log(`Por lo anterior se puede decir que No es un numero Capicúa(Palíndromo)`);
        }        

        process.exit();

});
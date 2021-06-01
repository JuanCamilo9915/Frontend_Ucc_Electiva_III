console.log("---------------------------------Ejercicio # 6----------------------------------");
console.log("--------------------Identificar si el Numero es Primo o No----------------------");

console.log('Ingrese el numero para saber si es primo o no: ');

let numIncognito;
let numPrimo = true;

process.stdin.on('data', function (numDigitado) {

     numIncognito = parseInt(numDigitado);

    for (let i = 2; i < numIncognito/2; i++) {
        
        k = numIncognito % i;
        
        switch (k) {
            case 0:
                numPrimo = false
                break;
        
            default:
                break;
        }
      
    }

    console.log(`\n-------------------------Resultado-----------------------------------------`);

    switch (numPrimo) {
        case true:
            console.log(`El numero ingresado: ${numIncognito}, es Primo`);
            break;
    
        default:
            console.log(`El numero ingresado: ${numIncognito}, no es Primo`);
            break;
    }
    
    process.exit();  

});
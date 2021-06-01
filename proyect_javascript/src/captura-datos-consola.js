process.stdout.write('¿Cual es tu nombre?');

process.stdin.on('data', (data) =>{
    let nombre = data.toString();
    process.stdout.write(nombre);
    process.exit();
});
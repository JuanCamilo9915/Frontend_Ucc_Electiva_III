console.log('-----------------------------------------Taller Automóvil Obj Dinámico-----------------------------------------');
let automovil = {
    tamTanqueCombus: 300,
    consumoKmLtrAuto: 15,
    dimRinLlantas: 13,
    recorridoKmAuto: 0,
    capacidadMaximaTanque: 600,
    cantLtrsTanqueados: 0,
    motorActivo: false,
    motorAutoOn: 'Encendido',
    colorAuto: 'Plata',
    acelerarMotorAuto: 0,

    recorridoKmRin() {
        this.recorridoKmRinAuto = this.dimRinLlantas * 2 * Math.PI;
        console.log(`La distancia que puede recorrer el auto por cada vuelta de las llantas con rin: ${this.dimRinLlantas}
        es de: ${parseInt(this.recorridoKmRinAuto)} KM`);
    },
    llenarTanqueCombusAuto() {
        this.cantLtrsTanqueados = Math.round(Math.random() * 600);
        console.log(`Se ha tanqueado el carro con: ${this.cantLtrsTanqueados} ltrs`);
    },
    encenderMotorAuto() {
        this.llenarTanqueCombusAuto();

        let encendiendoMotor = parseInt(Math.random() * 2);

        if (encendiendoMotor != 0 && this.cantLtrsTanqueados >= 20) {
            this.motorActivo = true
        }

        if (this.motorActivo == true) {
            console.log(`El motor del Automóvil está: ${this.motorAutoOn}`);
            this.acelerarAuto();
        } else if (this.cantLtrsTanqueados >= 20) {
            this.acelerarAuto();
        } else {
            this.motorAutoOn = 'Apagado';
            console.log(`El motor del Automóvil está: ${this.motorAutoOn}`);
        }
    },
    acelerarAuto() {
        this.acelerarMotorAuto = parseInt(Math.random() * 70);
        console.log(`\nEl motor del Automóvil está: Acelerando: ${this.acelerarMotorAuto} veces`);
        this.disminuirCantCombus(this.acelerarMotorAuto);
    },
    disminuirCantCombus(aceleracion) {
        let ltrsMenosPorKmRecorrido = 5.4;
        while (this.cantLtrsTanqueados >= 20 && aceleracion != 0) {
            this.recorridoKmAuto += ltrsMenosPorKmRecorrido;
            this.cantLtrsTanqueados -= ltrsMenosPorKmRecorrido;
            aceleracion--;
            //console.log(`\nEl motor del Automóvil está: Acelerando: ${aceleracion} veces`);
            console.log(`\nAl tanque le quedan: ${this.cantLtrsTanqueados} Ltrs de Combustible`);

            if (this.cantLtrsTanqueados < 20) {
                this.apagarMotorAuto(this.cantLtrsTanqueados);
            }

        }
        console.log(`\nEl motor del Automóvil está: ${this.motorAutoOn}`);
        this.recorridoKmRin();
        this.kmRecorridosAuto();
    },
    apagarMotorAuto(tanqueVacio) {
        console.log(`\nEl tanque de combustible se quedó sin gasolina:
        (Cantidad de Combustible del tanque: ${tanqueVacio} Ltrs de Combustible)`);
    },
    kmRecorridosAuto() {
        let i = this.consumoKmLtrAuto * this.cantLtrsTanqueados;
        if (i >= 0) {
            console.log(`\nEl automóvil recorrio: ${this.consumoKmLtrAuto * this.recorridoKmAuto} Kms`);
        }else{
            console.log(`\nEl automóvil no se tanquio con la cantidad de ltrs de combustibles necesarios para el trayecto.`);
        }
    }
}

automovil.encenderMotorAuto();
/**************************************************************************************************************************/
/*let vehiculo = {
    tamanioTanque: 20,
    kmtLitro: 70,
    radioLlantas: 13,
    polarizado: 'si',
    estaEncendido: false,
    estatusEncendido: 'apagado',
    capacidadTanqueCombustible: 100,
    cantCombustible: 0,
    odometro: 0,
    colorV: 'Negro',
    encender() {
        if (this.cantCombustible >= 2) {

            this.estaEncendido = 'encendido';

            console.log(`El carro está: ${this.estaEncendido}`);

        } else {

            console.log('El carro está apagado, porque no tiene Combustible');
        }
    },
    calcularRecorridoXLlanta() {

    },
    apagar() {
        if (this.estaEncendido == true) {
            this.estaEncendido = false;
            console.log('El carro está apagado');
        }
    },
    llenarTanqueCombustible() {
        if (this.cantCombustible < this.capacidadTanqueCombustible) {
            this.cantCombustible += Math.round(Math.random()*10);
            if (this.cantCombustible > this.capacidadTanqueCombustible) {
                this.cantCombustible = this.capacidadTanqueCombustible;
            }
        }
        
    },
    acelerar() {

    }
}

let maniVehiculo = Object.create(vehiculo);

maniVehiculo.encender();
*/

/*
let carro = {
    estadoActivoMotor: false,
    carroOn: 'Encendiendo',
    capacidadTanque: 3000,
    estadoTanque: 0,
    tamanRin: 19,
    carroOff: 'apagado',
    distanciaRin: 0,
    aceleracionn: 0,
    encender() {

        if (this.estadoActivoMotor == true) {
            console.log('El carro está encendido');
        } else {

            this.verificarCantCombustible();
        }

    },
    verificarCantCombustible() {
        console.log(this.estadoTanque);
        if (this.estadoTanque >= 200) {
            console.log(this.estadoTanque);
            this.estadoActivoMotor = true;
            console.log(`El carro está ${this.carroOn}`);
        } else {
            //this.estadoTanque = Math.round(Math.random()*3000);
            //this.estadoTanque = 100;
            console.log(`Ltrs de Combustible: ${this.estadoTanque}`);
            if (this.estadoTanque >= 200) {
                console.log(`El carro está encendiendo`);
            } else {
                this.estadoTanque = Math.round(Math.random() * 3000);
                console.log(`Se ha tanqueado el carro con: ${this.estadoTanque} ltrs`);
                console.log(this.estadoTanque);
                if (this.estadoTanque < 200) {
                    console.log(`El carro está apagado`);
                    this.verificarCantCombustible();
                } else {
                    console.log(`El carro está encendiendo`);
                    this.recorrido();
                    this.aceleracion();
                }
            }
        }
    },
    recorrido() {
        this.distanciaRin = this.tamanRin * 200 * Math.PI;
        console.log(`La distancia que puede recorrer es: ${this.distanciaRin} KM`);
    },
    aceleracion() {
        let i = 0;
        let incremento = 0;
        this.aceleracionn = Math.round(Math.random() * 100);

        while (this.estadoTanque >= 200) {
            //while (this.estadoTanque >= 200 && this.aceleracionn != 0) {
            if (i == 0) {
                console.log(`el carro acelera: ${this.aceleracionn} veces`);
            }

            i++;
            incremento++;
            this.estadoTanque--;
            this.aceleracionn--;
            console.log(`aceleracion: ${this.aceleracionn}
            incremento: ${incremento}
            Tanque bajo de nivel: ${this.estadoTanque}`);
        }

        if (this.estadoTanque < 200) {
            console.log(`el carro se ha: ${this.carroOff} por falta de combustible`);
        }
    }
}

carro.estadoTanque = 100;
carro.encender();
*/

console.log('--------------------------------------------------------------------------------------------------');
/*
let carro = {
    estadoActivoMotor: false,
    carroOn: 'Encendiendo',
    capacidadTanque: 3000,
    estadoTanque: 0,
    tamanRin: 19,
    distanciaRin: 0,
    aceleracionn: 0,
    encender() {
 
        if (this.estadoActivoMotor == true) {
            console.log('El carro está encendido');
        } else {
 
            this.verificarCantCombustible();
        }
 
    },
    verificarCantCombustible() {
        console.log(this.estadoTanque);
        if (this.estadoTanque >= 200) {
            console.log(this.estadoTanque);
            this.estadoActivoMotor = true;
            console.log(`El carro está ${this.carroOn}`);
        } else {
            //this.estadoTanque = Math.round(Math.random()*3000);
            //this.estadoTanque = 100;
            console.log(`Ltrs de Combustible: ${this.estadoTanque}`);
            if (this.estadoTanque >= 200) {
                console.log(`El carro está encendiendo`);
            } else {
                this.estadoTanque = Math.round(Math.random() * 3000);
                console.log(`Se ha tanqueado el carro con: ${this.estadoTanque} ltrs`);
                console.log(this.estadoTanque);
                if (this.estadoTanque < 200) {
                    console.log(`El carro está apagado`);
                    this.verificarCantCombustible();
                } else {
                    console.log(`El carro está encendiendo`);
                    this.recorrido();
                    this.aceleracion();
                }
            }
        }
    },
    recorrido() {
        this.distanciaRin = this.tamanRin * 200 * Math.PI;
        console.log(`La distancia que puede recorrer es: ${this.distanciaRin} KM`);
    },
    aceleracion() {
        let i = 0;
        let incremento = 0;
        this.aceleracionn = Math.round(Math.random() * 100);
 
        while (this.estadoTanque >= 200) {
            //while (this.estadoTanque >= 200 && this.aceleracionn != 0) {
            if (i == 0) {
                console.log(`el carro acelera: ${this.aceleracionn} veces`);
            }
 
            i++;
            incremento++;
            this.estadoTanque--;
            this.aceleracionn--;
            console.log(`aceleracion: ${this.aceleracionn}
            incremento: ${incremento}
            Tanque bajo de nivel: ${this.estadoTanque}`);
        }
 
        if (this.estadoTanque < 200) {
            console.log(`el carro apagado`);
        }
    }
}
 
carro.estadoTanque = 100;
carro.encender();

*/
/* Definitivo, Funciona
let carro = {
    estadoActivoMotor: false,
    carroOn: 'Encendiendo',
    capacidadTanque: 3,//3000,
    estadoTanque: 0,
    tamanRin: 19,
    distanciaRin: 0,
    aceleracionn: 0,
    kilometroDistancia: 10,
    encender() {
        if (this.estadoActivoMotor == true) {
            console.log('El carro está encendido');
        } else {
            this.verificarCantCombustible();
        }
    },
    verificarCantCombustible() {
        console.log(this.estadoTanque);
        if (this.estadoTanque >= 2) {
            console.log(this.estadoTanque);
            this.estadoActivoMotor = true;
            console.log(`El carro está ${this.carroOn}`);
        } else {
            //this.estadoTanque = Math.round(Math.random()*3000);
            //this.estadoTanque = 100;
            console.log(`Ltrs de Combustible: ${this.estadoTanque}`);
            if (this.estadoTanque >= 2) {
                console.log(`El carro está encendiendo`);
            } else {
                this.estadoTanque = Math.round(Math.random() * 30);
                console.log(`Se ha tanqueado el carro con: ${this.estadoTanque} ltrs`);
                console.log(this.estadoTanque);
                if (this.estadoTanque < 2) {
                    console.log(`El carro está apagado`);
                    this.verificarCantCombustible();
                } else {
                    console.log(`El carro está encendiendo`);
                    this.recorrido();
                    this.aceleracion();
                }
            }
        }
    },
    recorrido() {
        this.distanciaRin = this.tamanRin * 2 * Math.PI;
        console.log(`La distancia que puede recorrer es: ${this.distanciaRin} KM`);
    },
    aceleracion() {
        let i = 0;
        let incremento = 0;
        this.aceleracionn = Math.round(Math.random() * 20);
        //while (this.estadoTanque >= 2) {
        while (this.estadoTanque >= 2 && this.aceleracionn != 0) {
            if (i == 0) {
                console.log(`el carro acelera: ${this.aceleracionn} veces`);
            }
            console.log(`aceleracion: ${this.aceleracionn}
            incremento: ${incremento}
            Tanque bajo de nivel: ${this.estadoTanque}`);
            i++;
            incremento++;
            this.estadoTanque--;
            this.aceleracionn--;
            console.log(`mensaje 2`);
            console.log(`aceleracion: ${this.aceleracionn}
            incremento: ${incremento}
            Tanque bajo de nivel: ${this.estadoTanque}`);
 
        }
        console.log(`La distancia que recorrio fue:
         ${this.kilometroDistancia += parseInt(this.kilometroDistancia * this.distanciaRin * this.aceleracionn)} KM`);
        if (this.estadoTanque < 2) {
            console.log(`el carro apagado`);
        }
    }
}
carro.estadoTanque = 1;
carro.encender();*/
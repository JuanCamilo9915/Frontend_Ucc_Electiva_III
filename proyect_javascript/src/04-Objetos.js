console.log('------------------Objetos------------------------');

const persona = {
    nombre: 'Juan Camilo',
    estudios: 'UCC-Ingeniería de Sistemas',
    contactos: {
        contac1: '312456789',
        contac2: '31494678',
        contac3: '311644597',
        contac4: '31345687',
        contac5: '3124657975',
        familia: {
            mama: '31246646',
            papa: '312789654',
            abuelos: '9563214',
            tios: {
                stella: '32165498',
                rigo: '32165498',
                norberto: '32165498',
                nana: '32165498'
            }
        }
    },
    pertenencias: {
        carro: 'ferrari',
        pc: 'msi',
        conocimientos: {
            lenguaje: 'Java',
            hpertexto: 'Html',
            estilos: 'Css'
        }
    }
};

console.log(persona);
console.table(persona);

let otraPersona = {...persona};

otraPersona.nombre = 'Pedro';
otraPersona.estudios = 'Santiago de Cali';
otraPersona.fechaNaci = '15/02/2021';
console.log('-----------------------------------------------------------------------------');
console.table(persona);
console.table(otraPersona);

console.table('--------------------------------Objeto Dinámico--------------------------------------------------------');

const personaDinamica = {
    nombre: 'Juan Camilo',
    estudios: 'UCC-Ingeniería de Sistemas',
    contactos: {
        contac1: '312456789',
        contac2: '31494678',
        contac3: '311644597',
        contac4: '31345687',
        contac5: '3124657975',
        familia: {
            mama: '31246646',
            papa: '312789654',
            abuelos: '9563214',
            tios: {
                stella: '32165498',
                rigo: '32165498',
                norberto: '32165498',
                nana: '32165498'
            }
        }
    },
    pertenencias: {
        carro: 'ferrari',
        pc: 'msi',
        conocimientos: {
            lenguaje: 'Java',
            hpertexto: 'Html',
            estilos: 'Css'
        }
    },
    mostrarDatos(){
        console.log(`mi nombre es: ${this.nombre}, mi estudios son: ${this.estudios}`);
    },
    mostrarDatosContactos(){
        console.table(`
        mi nombre es: ${this.nombre},
        mi estudios son: ${this.estudios},
        mi contacto es: ${this.contactos},
        Tios son: ${this.tios}`);
    }
};

let obj = Object.create(personaDinamica);

obj.nombre = 'Carlos';
obj.estudios = 'Icesi';

obj.mostrarDatos();

obj.contactos = 'Julian';
obj.tios = 'Carlos, Catalina';

obj.mostrarDatosContactos();
// requiereds 
const argv = require('yargs')
    .command('listar', 'Imprime en consoa la tabla', {

        base: {


            demand: true,
            alias: 'b'
        },

        limite: {

            default: 10,
            alias: 'l'

        }


    }).help()
    .argv;
const { crearArchivo } = require('./multiplicar/mul.js');


let argv2 = process.argv;

console.log(argv);
console.log('limite', argv.limite);
/* 
let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivos creado ${archivo}`))
    .catch(e => { console.log(e) }); */
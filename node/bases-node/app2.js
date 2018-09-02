// requiereds 
const argv = require('./config/yargs').argv;
var colors = require('colors');


const {
    crearArchivo,
    listar
} = require('./multiplicar/mul.js');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear');

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivos creado ${archivo}`))
            .catch(e => { console.log(e) });
        break;

    case 'listar':
        console.log('listar'.underline.red) // outputs red underlined text

        listar(argv.base, argv.limite)
            .then(archivo => console.log(`Archivos creado ${archivo}`))
            .catch(e => { console.log(e) });

        break;
    default:
        break;
}

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
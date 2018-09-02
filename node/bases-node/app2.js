// requiereds 
const argv = require('./config/yargs').argv;


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
        console.log('lista');
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
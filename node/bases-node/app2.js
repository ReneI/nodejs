// requiereds 
const { crearArchivo } = require('./multiplicar/mul.js');


let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivos creado ${archivo}`))
    .catch(e => { console.log(e) });
// requiereds 
const { crearArchivo } = require('./multiplicar/mul.js');
let base = 11;
let data = ''

;


crearArchivo(base)
    .then(archivo => console.log(`Archivos creado ${archivo}`))
    .catch(e => { console.log(e) });
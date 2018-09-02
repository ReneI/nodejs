const option = {
    base: {


        demand: true,
        alias: 'b'
    },

    limite: {

        default: 10,
        alias: 'l'

    }

}
const argv = require('yargs')
    .command('listar', 'Imprime en consoa la tabla', option)
    .command('crear', 'Crea un archivo txt en consoa la tabla', option)
    .help()
    .argv;

module.exports = {
    argv

};
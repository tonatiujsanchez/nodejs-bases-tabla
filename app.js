
const { crearArchivoTabla } = require('./helpers/multiplicar')
const argv = require('./config/yargs')


console.clear()

const { base, listar, hasta } = argv

crearArchivoTabla( base, listar, hasta )
    .then( msg => console.log(msg) )
    .catch( err => console.log( 'ERROR =>',err ) )
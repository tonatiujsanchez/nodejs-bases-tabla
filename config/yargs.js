const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: "El la base para crear la tabla de multiplicar"
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: "Muestra la tabla creada en consola en consola"
        },
        'h':{
            alias: 'hasta',
            type: 'number',
            demandOption: false,
            default: 10,
            describe: "Hasta que número se requiere que se haga la tabla"
        }
    })
    .check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw "La base tiene que ser un numero"
        }

        if( isNaN( argv.h ) ){
            throw "El valor de hasta tiene que ser un número"
        }

        return true
    })
    .argv



// === Forma manual ===
// const [,, arg3='base=5' ] = process.argv
// const[ , base = 5 ] = arg3.split('=')  


module.exports = argv
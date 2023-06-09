
const fs = require('fs')
const colors = require('colors')

const crearArchivoTabla = async( base=5, listar=false, hasta=10 ) => {

    try {
        
        let salida = ''
        for (let i = 1; i <= hasta ; i++) {
            salida +=` ${ base } x ${ i } = ${ base * i } \n`
        }

        if(listar){
            console.log(`==== ==== ==== ==== ==== ======= ==== ====`.green);
            console.log( '      TABLA DEL:', base );
            console.log(`==== ==== ==== ==== ==== ======= ==== ====`.green);
            console.log(salida.rainbow)
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `Tabla del ${ base } guardada!`.underline.bgWhite.black
    
    } catch (error) {
        throw error
    }

    // fs.writeFileSync(`tabla-${base}.txt`, salida, ( err )=>{
    //     if (err) throw err

    //     console.log(`Tabla del ${ base } guardada!`)
    // })
}

module.exports = {
    crearArchivoTabla
}
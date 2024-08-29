const storage = require('./storage')

function insertar_usuario( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato) {
            reject( 'No existen datos' )
        } else {
            resolve( storage.insertar( dato ) )
        }
    } )
}

function obtener_usuario( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato) {
            reject( 'No existen datos' )
        } else {
            resolve( storage.obtener( dato ) )
        }
    } )
}
function actualizar_usuario( dato ) {
    return  new Promise( (resolve, reject) => {
        let usuario={
            usuario: dato.usuario,
            clave: dato.clave,
            nombre: dato.nombre,
            apellido: dato.apellido,
            fecha_nacimiento: dato.fecha_nacimiento
        }
    } )
}

module.exports = {
    insertar_usuario,
    obtener_usuario,
    actualizar_usuario,
    eliminar_usuario
}
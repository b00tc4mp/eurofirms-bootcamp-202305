const ctx = require('./ctx')
const { ObjectId } = require('mongodb')
const { stringValid } = require('./helpers/validators')

/**
 * La función recupera un usuario de una base de datos por su ID, elimina la información confidencial y devuelve el objeto de usuario.
 * @param id - El parámetro `id` es el identificador único del usuario que queremos recuperar de la base de datos.
 * @returns La función `retrieveUser` devuelve una promesa que se resuelve en el objeto de usuario con algunas modificaciones.
 */
function retrieveUser(id) {
    stringValid(id)
    
    return ctx.users.findOne({ "_id": new ObjectId(id) })
        .then((user) => {
            if (!user) throw new Error('El usuario no existe')

            user.id = id
            delete user.password
            delete user._id
            return user
        })
}
module.exports = retrieveUser
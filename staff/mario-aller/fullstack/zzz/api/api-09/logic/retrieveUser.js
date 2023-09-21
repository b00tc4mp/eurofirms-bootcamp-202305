const { User } = require('../data')
const { validateString } = require('./helpers')

/**
 * La función recupera un usuario de una base de datos por su ID, elimina la información confidencial y devuelve el objeto de usuario.
 * @param id - El parámetro `id` es el identificador único del usuario que queremos recuperar.
 * @returns La función `retrieveUser` devuelve una promesa que se resuelve en el objeto de usuario con el `id` especificado. El objeto de usuario se modifica para incluir una propiedad `id`, y las propiedades `contraseña` e `_id` se eliminan antes de devolver el objeto de usuario.
 */
function retrieveUser(id) {
    validateString(id)

    return User.findById(id,'name -_id').lean()
        .then((user) => {
            if (!user) throw new Error('El usuario no existe')

            return user
        })
}
module.exports = retrieveUser
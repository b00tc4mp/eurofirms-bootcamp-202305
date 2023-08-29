/**
 * La función recupera un usuario por su ID, excluyendo su contraseña, versión y favoritos, y devuelve
 * el objeto de usuario.
 * @param userId - El parámetro `userId` es el identificador único del usuario que queremos recuperar
 * de la base de datos.
 * @returns La función `retrieveUser` devuelve una promesa que se resuelve en el objeto de usuario con
 * las propiedades contraseña, __v y favs eliminadas.
 */
const { User } = require('../data')
const { validateId } = require('./helpers/validators')

function retrieveUser(userId) {
   validateId(userId)

    return User.findById(userId, '-password -__v -favs').lean()
    .then(user => {
        if (!user) throw new Error('user not found')

        delete user._id

        return user
    })
}
module.exports = retrieveUser
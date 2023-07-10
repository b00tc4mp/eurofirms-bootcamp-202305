const context = require('./context')
const { validateStr } = require('./helpers/validators')

/**
 * La función `getIdUser` toma un correo electrónico como entrada, lo valida y devuelve la identificación del usuario con ese correo electrónico.
 * @param email - El parámetro `email` es una cadena que representa el correo electrónico de un usuario.
 * @returns La función `getIdUser` devuelve la ID del usuario como una cadena.
 */
function getIdUser(email) {
    validateStr(email, validateStr.EMAIL)

    return context.users.findOne({ email })
        .then((user) => {
            if (!user) throw new Error('El usuario no existe')

            return user._id.toString()
        })
}
module.exports = getIdUser
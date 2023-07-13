const ctx = require('./ctx')
const { stringValid } = require('./helpers/validators')

/**
 * La función `getIdUser` toma un correo electrónico como entrada, lo valida y devuelve la identificación del usuario asociado con ese correo electrónico.
 * @param mail - El parámetro `mail` es una cadena que representa la dirección de correo electrónico de un usuario.
 * @returns el ID del usuario como una cadena.
 */
function getIdUser(mail) {
    stringValid(mail, ctx.STR_EMAIL)

    return ctx.users.findOne({ email: mail })
        .then((user) => {
            if (!user) throw new Error('El usuario no existe')

            return user._id.toString()
        })
}
module.exports = getIdUser
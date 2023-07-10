const ctx = require('./ctx')
const { stringValid } = require('./helpers/validators')

/**
 * La función `authenticateUser` toma el correo electrónico y la contraseña de un usuario, verifica si el correo electrónico y la contraseña son cadenas válidas y luego busca un usuario con el correo electrónico dado en una base de datos. Si se encuentra un usuario, comprueba si la contraseña coincide y devuelve el ID del usuario como una cadena.
 * @param mail - El parámetro `mail` es la dirección de correo electrónico del usuario que intenta autenticarse.
 * @param pwd - El parámetro `pwd` es la contraseña proporcionada por el usuario para la autenticación.
 * @returns el ID del usuario como una cadena si la autenticación es exitosa.
 */
function authenticateUser(mail, pwd) {
    stringValid(mail, ctx.STR_EMAIL)
    stringValid(pwd, ctx.STR_PASSWORD)

    return ctx.users.findOne({ email: mail })
        .then((user) => {
            if (!user) throw new Error('El usuario no existe')
            if (user.password !== pwd) throw new Error('Clave incorrecta')

            return user._id.toString()
        })
}
module.exports = authenticateUser
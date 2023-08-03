const { User } = require('../data')
const { validateString } = require('./helpers')

/**
 * La función `authenticateUser` toma un correo electrónico y una contraseña como parámetros, los valida y luego verifica si el usuario existe y si la contraseña es correcta antes de devolver la identificación del usuario.
 * @param email - El parámetro de correo electrónico es la dirección de correo electrónico del usuario que intenta autenticarse.
 * @param password - El parámetro `contraseña` es la contraseña ingresada por el usuario para la autenticación.
 * @returns La función `authenticateUser` devuelve la propiedad `_id` del objeto de usuario como una cadena.
 */
function authenticateUser(email, password) {
    validateString(email, validateString.EMAIL)
    validateString(password, validateString.PASSWORD)

    return User.findOne({ email }, 'password').lean()
        .then((user) => {
            if (!user) throw new Error('El usuario no existe')
            if (user.password !== password) throw new Error('Clave incorrecta')

            return user._id.toString()
        })
}
module.exports = authenticateUser
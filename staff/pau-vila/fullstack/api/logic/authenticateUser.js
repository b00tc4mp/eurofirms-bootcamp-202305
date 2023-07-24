/**
 * La función `authenticateUser` toma un correo electrónico y una contraseña como parámetros, los
 * valida y luego verifica si existe un usuario con ese correo electrónico en la base de datos y si la
 * contraseña coincide.
 * @param email - El parámetro de correo electrónico es la dirección de correo electrónico del usuario
 * que intenta autenticarse.
 * @param password - El parámetro `contraseña` es la contraseña ingresada por el usuario para la
 * autenticación.
 * @returns La función `authenticateUser` devuelve el `id` del usuario si la autenticación es exitosa.
 */
const { validateEmail, validatePassword } = require('./helpers/validators')
const { User } = require ('../data')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)
    
    return User.findOne({ email })
    .then(user => {
        if (!user) throw new Error('user not found')

        if (user.password !== password) throw new Error('wrong credentials')

        return user.id
    })
}
module.exports = authenticateUser
const { User }= require('../data')
const { validateString } = require('./helpers')

/**
 * La función `registerUser` toma un nombre, correo electrónico y contraseña, los valida, verifica si el usuario ya existe e inserta el usuario en una base de datos si no existe.
 * @param name - El parámetro de nombre es el nombre del usuario que se está registrando.
 * @param email - El parámetro de correo electrónico es la dirección de correo electrónico del usuario que se está registrando.
 * @param password - El parámetro `contraseña` es la contraseña que el usuario desea establecer para su cuenta.
 * @returns La función `registerUser` devuelve una promesa.
 */
function registerUser(name, email, password) {
    validateString(name, validateString.NAME)
    validateString(email, validateString.EMAIL)
    validateString(password, validateString.PASSWORD)

    return User.findOne({ email },'_id').lean()
        .then((user) => {
            if (user) throw new Error('El usuario ya existe')

            return User.create({ name, email, password })
        })
        .then(() => { })
}
module.exports = registerUser
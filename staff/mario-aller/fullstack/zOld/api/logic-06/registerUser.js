const context = require('./context')
const { validateStr } = require('./helpers/validators')

/**
 * La función `registerUser` toma un nombre, correo electrónico y contraseña, los valida, verifica si el usuario ya existe e inserta el usuario en una base de datos si no existe.
 * @param name - El parámetro de nombre es el nombre del usuario que se está registrando.
 * @param email - El parámetro de correo electrónico es la dirección de correo electrónico del usuario que se está registrando.
 * @param password - El parámetro `contraseña` es la contraseña que el usuario desea establecer para su cuenta.
 * @returns La función `registerUser` devuelve una promesa.
 */
function registerUser(name, email, password) {
    validateStr(name, validateStr.NAME)
    validateStr(email, validateStr.EMAIL)
    validateStr(password, validateStr.PASSWORD)

    return context.users.findOne({ email })
        .then((user) => {
            if (user) throw new Error('El usuario ya existe')

            return context.users.insertOne({ name, email, password })
        })
        .then(() => { })
}
module.exports = registerUser
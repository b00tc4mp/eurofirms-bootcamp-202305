const ctx = require('./ctx')
const { stringValid } = require('./helpers/validators')

/**
 * La función `registerUser` comprueba si ya existe un usuario con el correo electrónico proporcionado y, si no, inserta un nuevo usuario con el nombre, el correo electrónico y la contraseña proporcionados en la base de datos.
 * @param userName - El parámetro `userName` es el nombre del usuario que se está registrando.
 * @param mail - El parámetro `mail` es la dirección de correo electrónico del usuario que se está registrando.
 * @param pwd - El parámetro "pwd" representa la contraseña del usuario.
 * @returns nada.
 */
function registerUser(userName, mail, pwd) {
    stringValid(userName, ctx.STR_NAME)
    stringValid(mail, ctx.STR_EMAIL)
    stringValid(pwd, ctx.STR_PASSWORD)

    return ctx.users.findOne({ email: mail })
        .then((user) => {
            if (user) throw new Error('El usuario ya existe')

            return ctx.users.insertOne({ name: userName, email: mail, password: pwd })
        })
        .then(() => { })
}
module.exports = registerUser
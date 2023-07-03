const context = require('./context')
const stringValid = require('./stringValid')

/**
 * La función `registerUser` comprueba si ya existe un usuario con el correo electrónico dado y, si no, inserta un nuevo usuario con el nombre, el correo electrónico y la contraseña proporcionados en la base de datos.
 * @param userName - El parámetro `userName` es el nombre del usuario que se está registrando.
 * @param mail - El parámetro `mail` representa la dirección de correo electrónico del usuario que se está registrando.
 * @param pwd - El parámetro "pwd" significa contraseña. Se utiliza para pasar la contraseña del usuario al registrar un nuevo usuario.
 * @returns una promesa.
 */
function registerUser(userName, mail, pwd) {
    stringValid(userName)
    stringValid(mail)
    stringValid(pwd)

    return context.users.findOne({ email: mail })
        .then((user) => {
            if (user) throw new Error('El usuario ya existe')

            return context.users.insertOne({ name: userName, email: mail, password: pwd })
        })
}
module.exports = registerUser
/**
 * The function `authenticateUser` takes in an email and password, validates them using a
 * stringValidator, and then checks if the user exists and if the password is correct before returning
 * the user's ID.
 * @param mail - The `mail` parameter is the email address of the user trying to authenticate.
 * @param pwd - The `pwd` parameter is the password provided by the user for authentication.
 * @returns The function `authenticateUser` is returning a Promise that resolves to the string
 * representation of the `_id` property of the user object if the authentication is successful.
 */
const context = require('./context')
const stringValidator = require('./stringValidator')

function authenticateUser(mail, pwd) {
    stringValidator(mail, 'email')
    stringValidator(pwd, 'password')

    return context.users.findOne({ "email": mail })
        .then((user) => {
            if (user === null) throw new Error('El usuario no existe')
            if (user.password !== pwd) throw new Error('Clave incorrecta')
            return user._id.toString()
        })
}
module.exports = authenticateUser
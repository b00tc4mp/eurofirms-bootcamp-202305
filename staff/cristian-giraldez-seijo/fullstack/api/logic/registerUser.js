/**
 * The function `registerUser` is used to register a new user by validating their name, email, and
 * password, and then inserting the user into a database if they do not already exist.
 * @param userName - The userName parameter is the name of the user that is being registered.
 * @param mail - The `mail` parameter represents the email address of the user that is being
 * registered.
 * @param pwd - pwd stands for password. It is a parameter that represents the password of the user
 * being registered.
 * @returns The function `registerUser` is returning a promise.
 */
const context = require('./context')
const stringValidator = require('./stringValidator')

function registerUser(userName, mail, pwd) {
    stringValidator(userName, 'name')
    stringValidator(mail, 'email')
    stringValidator(pwd, 'password')

    return context.users.findOne({ "email": mail })
        .then((result) => {
            if (result) throw new Error('El usuario ya existe')
            return context.users.insertOne({ "name": userName, "email": mail, "password": pwd })
        })
}
module.exports = registerUser
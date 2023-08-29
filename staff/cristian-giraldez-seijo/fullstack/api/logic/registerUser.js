/**
 * The `registerUser` function validates the name, email, and password inputs, checks if the user
 * already exists in the database, and creates a new user if they don't exist.
 * @param name - The name of the user that is being registered.
 * @param email - The email parameter is the email address of the user that is being registered.
 * @param password - The `password` parameter is the password that the user wants to set for their
 * account.
 * @returns The function `registerUser` is returning a promise.
 */
const { User } = require('../data')
const { validateEmail, validatePassword, validateName } = require('./helpers/validators')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then((result) => {
            if (result) throw new Error('User already exist!')
            return User.create({ name, email, password })
        })
        .then(() => { })
}
module.exports = registerUser
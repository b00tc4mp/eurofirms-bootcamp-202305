const { User } = require('../data')
const { validateString } = require('./helpers')
/**
 * The function `authenticateUser` takes an email and password as parameters, validates them, and then
 * checks if the user exists and if the password is correct before returning the user's ID.
 * @param email - The email parameter is the email address of the user trying to authenticate.
 * @param password - The password parameter is the password entered by the user for authentication.
 * @returns the user's ID as a string if the authentication is successful.
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
/**
 * The function registers a new user by validating the input data and creating a new user in the
 * database if the user does not already exist.
 * @param name - The name parameter is a string that represents the name of the user being registered.
 * @param email - The email parameter is the email address of the user that is being registered.
 * @param password - The `password` parameter is the password that the user wants to set for their
 * account.
 * @returns a promise.
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
module.exports = {
    authenticateUser,
    registerUser
}
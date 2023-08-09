const { models: { UserModel } } = require('dat')
const { validateString } = require('com')
//const { validators: { validateString } } = require('com')

/**
 * The function registers a new user by validating the input data and creating a new user in the
 * database if the user does not already exist.
 * @param name - The name parameter is a string that represents the name of the user being registered.
 * @param email - The email parameter is the email address of the user that is being registered.
 * @param password - The `password` parameter is the password that the user wants to set for their
 * account.
 * @returns a promise.
 */
function registerUser(name, surname, zip, email, password) {
    validateString(name, validateString.NAME)
    validateString(surname, validateString.NAME)
    validateString(zip)
    validateString(email, validateString.EMAIL)
    validateString(password, validateString.PASSWORD)

    return UserModel.findOne({ email }, '_id').lean()
        .then((user) => {
            if (user) throw new Error('El usuario ya existe')

            return UserModel.create({ name, surname, zip, email, password })
        })
        .then(() => { })
}
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

    return UserModel.findOne({ email }, 'password').lean()
        .then((user) => {
            if (!user) throw new Error('El usuario no existe')
            if (user.password !== password) throw new Error('Clave incorrecta')

            return user._id.toString()
        })
}
/**
 * The function retrieves a user from a database based on their ID and returns their name, surname, zip
 * code, and email.
 * @param id - The `id` parameter is the unique identifier of the user in the database. It is used to
 * retrieve the user's information from the database.
 * @returns a promise that resolves to the user object with the specified fields (name, surname, zip,
 * email) from the User collection in the database.
 */
function retrieveUser(id) {
    validateString(id)

    return UserModel.findById(id, 'name surname zip email').lean()
        .then((user) => {
            if (!user) throw new Error('El usuario no existe')

            user.id = user._id.toString()
            delete user._id

            return user
        })
}
function updateUser(userId, name, surname, zip) {
    validateString(userId)
    validateString(name, validateString.NAME)
    validateString(surname, validateString.NAME)
    validateString(zip, validateString.INTEGER)

    return UserModel.findById(userId, '_id')
        .then(user => {
            if (!user) throw new Error('User do not exists')

            user.name = name
            user.surname = surname
            user.zip = zip
            user.date = new Date()
            return user.save()
        })
        .then(() => { })
}

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser
}

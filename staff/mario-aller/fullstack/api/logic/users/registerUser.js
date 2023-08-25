const { models: { UserModel } } = require('dat')
const { validateString } = require('com')

/**
 * The function `registerUser` validates and creates a new user in a database if the user does not
 * already exist.
 * @param name - The name of the user.
 * @param surname - The surname parameter is the last name or family name of the user.
 * @param zip - The "zip" parameter is used to store the user's zip code.
 * @param email - The email parameter is the email address of the user that is being registered.
 * @param password - The password parameter is a string that represents the user's password.
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
            if (user) throw new Error('user exists')

            return UserModel.create({ name, surname, zip, email, password })
        })
        .then(() => { })
}

module.exports = registerUser
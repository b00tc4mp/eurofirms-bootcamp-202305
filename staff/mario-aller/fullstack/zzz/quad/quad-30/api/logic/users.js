const { models: { UserModel } } = require('dat')
const { validateString } = require('com')
//const { validators: { validateString } } = require('com')

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
 * The function retrieves a user from the UserModel by their ID and returns their name, surname, zip
 * code, and email.
 * @param id - The `id` parameter is the unique identifier of the user that we want to retrieve from
 * the database.
 * @returns a promise that resolves to a user object.
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
/**
 * The function updateUser updates the name, surname, zip, and date of a user with the given userId.
 * @param userId - The userId parameter is the unique identifier of the user whose information needs to
 * be updated.
 * @param name - The name parameter is a string representing the user's first name.
 * @param surname - The surname parameter is the last name or family name of the user.
 * @param zip - The `zip` parameter is a string representing a zip code.
 * @returns a promise.
 */
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

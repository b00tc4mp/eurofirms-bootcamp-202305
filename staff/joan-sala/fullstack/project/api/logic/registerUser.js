const { validateName, validateEmail, validatePassword, validateUrl } = require('./helpers/validators')
const { User } =  require('../data')


/**
 * The function registers a new user by validating their name, email, password, and image, and then
 * creating a new user in the database if they do not already exist.
 * @param name - The name parameter is the name of the user that is being registered.
 * @param email - The email parameter is the email address of the user that is being registered.
 * @param password - The password parameter is the password that the user wants to set for their
 * account.
 * @param image - The "image" parameter is the URL of the user's profile image.
 * @returns a promise.
 */
function registerUser(name, email, password, image){
    validateName(name)
    validateEmail(email)
    validatePassword(password)
    validateUrl(image)

    return User.findOne({ email })
        .then(user => {
            if(user) throw new Error('User already exist')

            return User.create ({name, email, password, image})
        })
        .then(() => {})
}
module.exports = registerUser
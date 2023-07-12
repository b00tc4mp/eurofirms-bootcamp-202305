/**
 * The function `authenticateUser` takes in an email and password, validates them, and then searches
 * for a user with the given email in the database. If found, it checks if the password matches and
 * returns the user's ID as a string.
 * @param mail - The `mail` parameter is the email address of the user trying to authenticate.
 * @param pwd - The `pwd` parameter is the password provided by the user for authentication.
 * @returns The function `authenticateUser` is returning a Promise that resolves to the string
 * representation of the user's `_id` if the user is found and the password is correct.
 */
const context = require('./context')
const {validateEmail, validatePassword} = require('./helpers/validators')

function authenticateUser(mail, pwd) {
validateEmail(mail)
validatePassword(pwd)

    return context.users.findOne({ "email": mail })
        .then((user) => {
            if (user === null) throw new Error('User not found!')
            if (user.password !== pwd) throw new Error('Wrong Credentials!')
            return user._id.toString()
        })
}
module.exports = authenticateUser
/**
 * The function `authenticateUser` takes in an email and password, validates them, and returns the user
 * ID if the credentials are correct.
 * @param mail - The `mail` parameter is the email address of the user trying to authenticate.
 * @param pwd - The `pwd` parameter stands for password. It is the password provided by the user for
 * authentication.
 * @returns The function `authenticateUser` is returning the `id` of the user if the user is found and
 * the password is correct.
 */
const { User } = require('../data')
const {validateEmail, validatePassword} = require('./helpers/validators')

function authenticateUser(mail, pwd) {
validateEmail(mail)
validatePassword(pwd)

    return User.findOne({ "email": mail })
        .then((user) => {
            if (!user) throw new Error('User not found!')
            if (user.password !== pwd) throw new Error('Wrong Credentials!')
            return user.id
        })
}
module.exports = authenticateUser
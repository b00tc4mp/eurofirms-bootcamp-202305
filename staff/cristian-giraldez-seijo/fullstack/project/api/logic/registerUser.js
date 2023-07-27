const { User } = require('../data')
const { validateEmail, validatePassword, validateNickname } = require('./helpers/validators')

function registerUser(nickname, email, password) {
    validateNickname(nickname)
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then((result) => {
            if (result) throw new Error('User already exist!')
            return User.create({ nickname, email, password })
        })
        .then(() => { })
}
module.exports = registerUser
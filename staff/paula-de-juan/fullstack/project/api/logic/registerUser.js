const { User } = require('../data')
const { validateName, validateNickname,  validateEmail, validatePhone, validatePassword } = require('./helpers/validators')

function registerUser(name, nickname, email, phone, password) {
    validateName(name)
    validateNickname(nickname)
    validateEmail(email)
    validatePhone(phone)
    validatePassword(password)

    return User.findOne({ email, phone })
        .then(user => {
            if (user) throw new Error('User already exists')

            return User.create({ name, nickname, email, phone, password })
        })
        .then(() => { })
}
module.exports = registerUser
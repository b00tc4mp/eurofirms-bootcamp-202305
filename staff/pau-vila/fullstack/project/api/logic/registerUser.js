const { User } = require('../data')
const { validateName, validateEmail, validatePassword, validateZip, validatePhone } = require('./helpers/validators')

function registerUser(name, email, password, zip, phone) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)
    validateZip(zip)
    validatePhone(phone)

    return User.findOne({ email })
        .then(user => {
            if (user) throw new Error('user already exist')

            return User.create({ name, email, password, zip, phone })
        })
        .then(() => { })
}

module.exports = registerUser

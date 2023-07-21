const { validateEmail, validatePassword } = require('./helpers/validators')
const { User } = require('../data')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then(user => {
            if (!user) throw new Error('user not found')

            if (user.password !== password) throw new Error('wrong credentials')

            return user.id
        })
}

module.exports = authenticateUser

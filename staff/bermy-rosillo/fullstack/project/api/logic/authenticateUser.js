const { User } = require('../data/index')
const { validateEmail, validatePassword } = require('./helpers/validators')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email }, '-name -email -__v').lean()
        .then(user => {
            if (!user) throw new Error('User not exist')

            if (user.password !== password) throw new Error('Wrong credentials')
        
            delete user.password

            user.id = user._id.toString()

            delete user._id

            return user
        })
}
module.exports = authenticateUser
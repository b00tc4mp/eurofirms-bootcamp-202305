const { User } = require('../data')
const {validateEmail, validatePassword} = require('./helpers/validators')

function authenticateUser(email, password) {
validateEmail(email)
validatePassword(password)

    return User.findOne({ "email": email })
        .then((user) => {
            if (!user) throw new Error('User not found!')
            if (user.password !== password) throw new Error('Wrong Credentials!')
            return user.id
        })
}
module.exports = authenticateUser
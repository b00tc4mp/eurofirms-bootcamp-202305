const context = require('./context')
const {validateName, validateEmail, validatePassword} = require('./helpers/validators')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return context.users.findOne({email})
    .then(user => {
        if (user) throw new Error('user already exists')

        return context.users.insertOne({name, email, password})
    })
}

module.exports = registerUser
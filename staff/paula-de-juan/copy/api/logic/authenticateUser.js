const context = require('./context')
const validators = require('./helpers/validators')
const { validateEmail, validatePassword } = validators

function authenticateUser(email, password){
    validateEmail(email)
    validatePassword(password)

    return context.users.findOne({ email })
        .then(user => {
            if(!user) throw new Error('user not found')
            if(user.password !== password) throw new Error('wrong credentials')

            return user._id.toString()
        })
}
module.exports = authenticateUser


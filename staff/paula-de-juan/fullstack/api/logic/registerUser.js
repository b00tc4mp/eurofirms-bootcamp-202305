const context = require('./context')
const { validateEmail, validatePassword, validateName }
= require('./helpers/validators')

function registerUser(name, email, password){

    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return context.users.findOne({email})
        .then(user => {
            if (user) throw new Error('User already exists')
            
        return context.users.insertOne({name, email, password})
        })
}
module.exports = registerUser
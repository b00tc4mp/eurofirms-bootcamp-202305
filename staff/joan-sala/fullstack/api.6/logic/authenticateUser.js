const context = require('./context')
const { validateEmail, validatePassword, validateId }  = require('./helpers/validators')

function authenticateUser(email, password){
    //parte sincrona
    validateEmail(email)
    validatePassword(password)

    //parte asincrona    
    return context.users.findOne({email})
    .then(user =>{
        if(!user) throw new Error('User not found')

        if (user.password !== password) throw new Error('Wrong credentials')

        return user._id.toString()
    })
}

module.exports = authenticateUser
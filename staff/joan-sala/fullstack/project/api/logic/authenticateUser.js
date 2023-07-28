const { validateEmail, validatePassword }  = require('./helpers/validators')
const { User } = require('../data')

function authenticateUser(email, password){
    //parte sincrona
    validateEmail(email)
    validatePassword(password)
    
    //parte asincrona    
    return User.findOne({email})
    .then(user =>{
        if(!user) throw new Error('User not found')

        if (user.password !== password) throw new Error('Wrong credentials')
        
        return user.id
    })
}

module.exports = authenticateUser
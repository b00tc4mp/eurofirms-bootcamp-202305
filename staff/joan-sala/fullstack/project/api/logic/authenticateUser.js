const { validateEmail, validatePassword }  = require('./helpers/validators')
const { User } = require('../data')

/**
 * The function `authenticateUser` takes an email and password as input, validates them synchronously,
 * and then asynchronously checks if the user exists and if the password is correct.
 * @param email - The email parameter is the email address entered by the user for authentication.
 * @param password - The password parameter is the password entered by the user for authentication.
 * @returns the user's id if the authentication is successful.
 */
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
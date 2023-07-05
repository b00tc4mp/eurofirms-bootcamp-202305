const context = require('./context')

/**
 * The function `authenticateUser` takes an email and password as parameters, validates them, and
 * returns the user's ID if the credentials are correct.
 * @param email - The email parameter is the email address of the user trying to authenticate.
 * @param password - The password parameter is the password entered by the user for authentication.
 * @returns a Promise that resolves to the user's _id as a string if the authentication is successful.
 * If the authentication fails, it throws an error with the message 'Wrong credentials'.
 */
function authenticateUser(email, password){
    //parte sincrona
    const { validateEmail, validatePassword } = require('./helpers/validators')
    const { users } = context

    //parte asincrona    
    return users.findOne({email})
    .then(user =>{
        if(!user || user.password !== password) throw new Error('Wrong credentials')

        if (user.password !== password) throw new Error('Wrong credentials')

        return user._id.toString()
    })
}

module.exports = authenticateUser
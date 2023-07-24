const { User } = require('../data/models')
const validators = require('./helpers/validators')
const { validateEmail, validatePassword } = validators

function authenticateUser(email, password){
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then(user => {
            if(!user) throw new Error('user not found')
            if(user.password !== password) throw new Error('wrong credentials')

        // return user._id.toString()
        /* Mongoose tiene un metodo getter por detras con el cual ya no hace falta
         indicar el _id.toString() */
        return user.id
        })
}
module.exports = authenticateUser


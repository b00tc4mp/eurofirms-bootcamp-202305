const {User} = require('../data/index') 
const{validateEmail, validatePassword} = require('./helpers/validators')

function authenticateUser(email,password){
    validateEmail(email)
    validatePassword(password)

    return User.findOne({email})
    .then(user=>{
        if(!user) throw new Error('User not exist')

        if(user.password !== password) throw new Error('Wrong credentials')

        return user.id
    })
}
module.exports = authenticateUser
const{User}= require('../data/index')
const {validateName, validatePassword, validateEmail} = require('./helpers/validators')

function registerUser(name,password,email,role){
    validateName(name)
    validatePassword(password)
    validateEmail(email)

    return User.findOne({email})
    .then(user=>{
        if (user) throw new Error('User already exist ')

        return User.create({name, password, email, role})
    })
    .then(()=>{})

}
module.exports = registerUser
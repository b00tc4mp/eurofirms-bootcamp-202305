const{User}= require('../data/index')
const {validateName, validatePassword, validateEmail} = require('./helpers/validators')

function registerUser(name,lastName,password,email,role){
    validateName(name)
    validateName(lastName)
    validatePassword(password)
    validateEmail(email)

    return User.findOne({email})
    .then(user=>{
        if (user) throw new Error('User already exist ')

        return User.create({name, lastName,password,email,role})
    })
    .then(()=>{})

}
module.exports = registerUser
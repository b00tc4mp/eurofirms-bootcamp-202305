//const context = require('./context')
const{validateName,validateEmail,validatePassword} = require('./helpers/validators')
const{User} = require('../data')
/**
 * Register an user
 * 
 * @param {string} name the user name
  *@param {string} email the user email
  *@param {string} password the user password
    @return {Error} throw errors if ...
  * @returns {Promise}
 */
function registerUser(name,email,password){
  validateName(name)
  validateEmail(email)
  validatePassword(password)

    return User.findOne({email})
    .then((user)=>{
        if(user) throw new Error('User already exist')

        return User.create({name,email,password})
    })
    .then(()=>{})
}
module.exports = registerUser
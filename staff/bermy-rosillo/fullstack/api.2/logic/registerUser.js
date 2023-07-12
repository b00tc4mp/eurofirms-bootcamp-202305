const context = require('./context')
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
    
    if(typeof name !== 'string')throw new Error('Name is not a string')
    if(name === '') throw new Error('name empty')
    if(typeof email !== 'string') throw new Error('Email is not a string')
    if(email === '') throw new Error('Email is empty')
    if(typeof password != 'string') throw new Error('Password is not a string')
    if(password === '') throw new Error('Password is empty')

    return context.users.findOne({email})
    .then((user)=>{
        if(user) throw new Error('User already exist')

        return context.users.insertOne({name,email,password})
    })
}
module.exports = registerUser
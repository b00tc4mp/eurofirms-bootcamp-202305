const context = require('./context')

/**
 * Registers a user
 * 
 * @param {string} name The user name
 * @param {string} email The user email
 * @param {string} password The user password
 * 
 * @throws {Error} In case name, email or password do not match the expected value types and formats (synchronous)
 * 
 * @returns {Promise}
 * 
 * @throws {Error} In case user already exists (asynchronous)
 */

function registerUser(name,email,password){
    if(typeof name !== 'string') throw new Error('Name is not string')
    if(name === '') throw new Error('Name is empty')
    if(typeof email !=='string') throw new Error('Email is not a string')
    if(email === '') throw new Error('Email is empty')
    if(typeof password !== 'string') throw new Error('Password is noot a string')
    if(password === '') throw new Error('Password is empty')

    return context.users.findOne({email})
        .then(user => {
            if(user) throw new Error('User already exist')

            return context.users.insertOne({name, email, password})
        })
}
module.exports = registerUser
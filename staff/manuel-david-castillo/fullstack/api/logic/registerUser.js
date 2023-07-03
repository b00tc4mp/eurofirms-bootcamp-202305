const context = require('./context')

function registerUser(name, email, password) {
    if (typeof name !== 'string') throw new Error('name is not a string')
    if(name === '') throw new Error('name is empty')
    if (typeof email !== 'string') throw new Error('email is not a string')
    if(email === '') throw new Error('email is empty')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if(password === '') throw new Error('password is empty')

    return context.users.findOne({email})
    .then(user => {
        if (user) throw new Error('user already exists')

        return context.users.insertOne({name, email, password})
    })
}

module.exports = registerUser()
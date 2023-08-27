const context = require('./context')

function authenticateUser(email, password) {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (email === '') throw new Error('this field could not be empty')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (password === '') throw new Error('password is empty')

    return context.users.findOne({ email })
        .then(user => {
            if (!user) throw new Error('User not found')

            if (user.password !== password) throw new Error('Wrong credentials')

            return user._id.toString()
          
        })
       
       
}   
module.exports = authenticateUser

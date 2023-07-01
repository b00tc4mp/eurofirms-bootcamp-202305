const context = require('./context')

function authenticateUser(email, password){
    if(typeof email !== 'string') throw new Error('email is not a string')
    if(email === '') throw new Error('email is empty')
    if(typeof password !== 'string') throw new Error('password is not a string')
    if(password === '') throw new Error('password is empty')

    const {users} = context

    return users.findOne({email})
    .then(user =>{
        if(!user || user.password !== password) throw new Error('wrong credentials')

        return user._id.toString()
    })
}

module.exports = authenticateUser
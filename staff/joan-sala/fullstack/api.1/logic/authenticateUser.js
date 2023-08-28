const context = require('./context')

function authenticateUser(email, password){
    //parte sincrona
    if(typeof email !== 'string') throw new Error('Email is not a string')
    if(email === '') throw new Error('Email is empty')
    if(typeof password !== 'string') throw new Error('Password is not a string')
    if(password === '') throw new Error('Password is empty')

    const {users} = context

    //parte asincrona    
    return users.findOne({email})
    .then(user =>{
        if(!user || user.password !== password) throw new Error('Wrong credentials')

        return user._id.toString()
    })
}

module.exports = authenticateUser
const{User} = require('../data/index')
const{validateId} = require('./helpers/validators')

function retrieveUser(userId){
    validateId(userId)

    return User.findById(userId, '-password -__v').lean()
    .then(user=>{

        if(!user) throw new Error('User not foond')
        delete user._id
        
        return user

    })
}
module.exports = retrieveUser
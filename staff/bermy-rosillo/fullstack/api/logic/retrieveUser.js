const context = require('./context')
const {ObjectId} = require('mongodb')

function retrieveUser(userId){
    if(typeof userId !== 'string') throw new Error('UserId is not a string')
    if(userId === '') throw new Error('UserId is empty')

    return context.users.findOne({_id: new ObjectId(userId)})
    .then(user=>{
        if(!user) throw new Error('User not founded')

        user.id = user._id.toString()
        delete user._id
        delete user.password
        
        return user
    })
}
module.exports = retrieveUser
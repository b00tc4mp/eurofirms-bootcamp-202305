const context = require('./context')
const { ObjectId } = require('mongodb')

function retrieveUser(userId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if(userId === '') throw new Error('userId is empty')

    return context.users.findOne({_id: new ObjectId(userId)})
        .then(user => {
            if(!user) throw new Error('user not found')

            delete user._id
            delete user.password

            return user
        })
}

module.exports = retrieveUser
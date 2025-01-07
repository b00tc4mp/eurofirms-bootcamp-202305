const context = require('./context')
const { ObjectId } = require('mongodb')
const {validateId} = require('./helpers/validators')

function retrieveUser(userId) {
    validateId(userId)

    return context.users.findOne({_id: new ObjectId(userId)})
        .then(user => {
            if(!user) throw new Error('user not found')

            delete user._id
            delete user.password

            return user
        })
}

module.exports = retrieveUser
const {validateId} = require('./helpers/validators')
const {User} = require('../data/models')

function retrieveUser(userId, userIdProfile) {
    validateId(userId)

    return Promise.all([User.exists({ _id: userId }), 
        User.findById(userIdProfile, 'name email image description -_id').lean()]) 
        .then(([user, userProfile]) => {
            if(!user) throw new Error('user not found')
            if(!userProfile) throw new Error('userProfile not found')

            return userProfile
        })
}

module.exports = retrieveUser
const {User} = require('../../data/models')
const {validateId} = require('../helpers/validators')

function toggleFollowUser(userId, userIdProfile) {
    validateId(userId)
    validateId(userIdProfile)

    return Promise.all([User.findById(userId), User.findById(userIdProfile)]) 
    .then(([user, userProfile]) => {
        if (!user) throw new Error ('user not found')
        if(!userProfile) throw new Error('userProfile not found')

        const followingUsers = user.following ? user.following : []

        const index = followingUsers.findIndex((id) => userIdProfile === id.toString())

        if(index === -1) {
            followingUsers.push(userProfile._id)
        } else  {
           followingUsers.splice(index, 1)
        }

        return user.save()
    })
    .then(()=> {})
}

module.exports = toggleFollowUser
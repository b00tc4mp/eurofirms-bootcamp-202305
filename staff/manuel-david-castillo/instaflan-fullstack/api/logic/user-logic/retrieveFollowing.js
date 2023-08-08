const { User } = require("../../data/models");
const { validateId } = require("../helpers/validators");

function retrieveFolling(userId) {
    validateId(userId)

    return User.findById(userId, '-__v').populate('following', 'name image').lean()
    .then(user => {
        if(!user) throw new Error('user not found')

        const following = user.following

        following.forEach(user => {
            user.id = user._id.toString()
            delete user._id

            user.follow = true
        });

        return following
    })
}

module.exports = retrieveFolling
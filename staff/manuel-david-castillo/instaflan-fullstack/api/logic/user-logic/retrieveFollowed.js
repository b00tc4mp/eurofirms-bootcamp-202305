const { User } = require("../../data/models");
const { validateId } = require("../helpers/validators");

function retrieveFollowed(userId) {
    validateId(userId)

    return User.findById(userId, '-__v').populate('followed', 'name image').lean()
    .then(user => {
        if(!user) throw new Error('user not found')

        const followed = user.followed

        followed.forEach(user => {
            user.id = user._id.toString()
            delete user._id
        });

        return followed
    })
}

module.exports = retrieveFollowed
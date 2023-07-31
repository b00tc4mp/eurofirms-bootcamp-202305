const { validateId } = require('./helpers/validators')
const { User } = require('../data')

function retrieveUser(userId) {
    validateId(userId)

    return User.findById(userId, '-email -password -__v  -favs').lean()
    .then(user => {
        if (!user) throw new Error('user not found')

        delete user._id

        return user
    })
}

module.exports = retrieveUser
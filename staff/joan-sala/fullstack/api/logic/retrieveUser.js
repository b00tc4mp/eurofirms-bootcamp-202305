const { validateId } = require('./helpers/validators')
const { User } = require('../data')

function retrieveUser(userId) {
    validateId(userId)
                                                  //te trae el documento limpio, libiano
    return User.findById(userId, '-password -__v -favs').lean()

        .then(user => {
            if (!user) throw new Error('User not found')

            delete user._id

            return user
        })
}
module.exports = retrieveUser
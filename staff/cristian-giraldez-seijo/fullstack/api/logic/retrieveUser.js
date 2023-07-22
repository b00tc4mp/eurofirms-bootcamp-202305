/**
 * The function retrieves a user by their ID, excluding their password, version, and favorites, and
 * returns the user object.
 * @param userId - The `userId` parameter is the unique identifier of the user that we want to retrieve
 * from the database.
 * @returns The `retrieveUser` function is returning a promise that resolves to the user object with
 * the `_id`, `password`, `__v`, and `favs` properties removed.
 */
const { validateId } = require('./helpers/validators')
const { User } = require('../data')

function retrieveUser(userId) {
    validateId(userId)

    return User.findById(userId, '-password -__v  -favs').lean()
        .then(user => {
            if (!user) throw new Error('user not found')

            delete user._id

            return user
        })
}

module.exports = retrieveUser
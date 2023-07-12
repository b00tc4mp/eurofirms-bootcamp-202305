/**
 * The function retrieves a user from a MongoDB database, sanitizes the user object, and returns it.
 * @param userId - The `userId` parameter is the unique identifier of the user that we want to retrieve
 * from the database.
 * @returns The `retrieveUser` function is returning a promise that resolves to the user object
 * retrieved from the database.
 */
const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId } = require('./helpers/validators')

function retrieveUser(userId) {
    validateId(userId)

    return context.users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error('user not found')

            // sanitize

            delete user._id
            delete user.password

            return user
        })
}

module.exports = retrieveUser
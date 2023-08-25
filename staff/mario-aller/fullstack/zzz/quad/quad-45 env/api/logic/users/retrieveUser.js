const { models: { UserModel } } = require('dat')
const { validateString } = require('com')

/**
 * The function retrieves a user from the UserModel by their ID and returns their name, surname, zip
 * code, and email.
 * @param id - The `id` parameter is the unique identifier of the user that we want to retrieve from
 * the database.
 * @returns a promise that resolves to a user object.
 */
function retrieveUser(id) {
    validateString(id)

    return UserModel.findById(id, 'name surname zip email').lean()
        .then(user => {
            if (!user) throw new Error('user does not exist')

            user.id = user._id.toString()
            delete user._id

            return user
        })
}

module.exports = retrieveUser
const { models: { UserModel } } = require('dat')
const { validateString } = require('com')

/**
 * The function updateUser updates the name, surname, zip, and date of a user with the given userId.
 * @param userId - The userId parameter is the unique identifier of the user whose information needs to
 * be updated.
 * @param name - The name parameter is a string representing the user's first name.
 * @param surname - The surname parameter is the last name or family name of the user.
 * @param zip - The `zip` parameter is a string representing a zip code.
 * @returns a promise.
 */
function updateUser(userId, name, surname, zip) {
    validateString(userId)
    validateString(name, validateString.NAME)
    validateString(surname, validateString.NAME)
    validateString(zip, validateString.INTEGER)

    return UserModel.findById(userId, '_id')
        .then(user => {
            if (!user) throw new Error('user does not exists')

            user.name = name
            user.surname = surname
            user.zip = zip
            user.date = new Date()
            return user.save()
        })
        .then(() => { })
}

module.exports = updateUser
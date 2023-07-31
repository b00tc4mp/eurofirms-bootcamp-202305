const { validateId } = require("../helpers/validators");

function retrieveUsersNotFollowed(userId) {
    validateId(userId)

    return User.find({}, '-__v').lean()
}

module.exports = retrieveUsersNotFollowed
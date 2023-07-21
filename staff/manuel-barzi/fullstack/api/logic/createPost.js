const { validateId, validateUrl, validateText } = require('./helpers/validators')
const { User, Post } = require('../data')

function createPost(userId, image, text) {
    validateId(userId)
    validateUrl(image)
    validateText(text)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

            return Post.create({ author: userId, image, text })
        })
        .then(() => { })
}

module.exports = createPost
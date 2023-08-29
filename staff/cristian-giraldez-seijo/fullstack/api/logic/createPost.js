/**
 * The `createPost` function creates a new post by validating the user ID, image URL, and text, and
 * then creating a new post with the provided information.
 * @param userId - The userId parameter is the ID of the user who is creating the post.
 * @param image - The `image` parameter is the URL of the image that will be associated with the post.
 * @param text - The `text` parameter is a string that represents the text content of the post.
 * @returns The function `createPost` is returning a promise.
 */
const { validateId, validateUrl, validateText } = require('./helpers/validators')
const { User, Post } = require('../data')

function createPost(userId, image, text) {

    validateId(userId)

    validateUrl(image)

    validateText(text)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('User not found!')
            return Post.create({ author: user.id, image, text })
        })
        .then(() => { })
}

module.exports = createPost
/**
 * The `updatePost` function updates the image and text of a post, given the user ID, post ID, image
 * URL, and text.
 * @param userId - The ID of the user who is updating the post.
 * @param postId - The postId parameter is the unique identifier of the post that needs to be updated.
 * @param image - The `image` parameter is the URL of the image that will be updated for the post.
 * @param text - The `text` parameter is a string that represents the updated text content of the post.
 * @returns The function `updatePost` is returning a Promise.
 */
const { validateId, validateUrl, validateText } = require('./helpers/validators')
const { User, Post } = require('../data')

function updatePost(userId, postId, image, text) {
    validateId(userId)
    validateId(postId)
    validateUrl(image)
    validateText(text)

    return Promise.all([User.findById(userId).lean(), Post.findById(postId)])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found!')
            if (!post) throw new Error('post not found!')

            if (post.author.toString() !== userId) throw new Error('post does not belong to user!')

            post.image = image
            post.text = text

            return post.save()
        })
        .then(() => { })
}

module.exports = updatePost
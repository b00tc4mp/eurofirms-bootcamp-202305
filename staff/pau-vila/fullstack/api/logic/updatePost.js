const { validateId, validateUrl, validateText } = require('./helpers/validators')
const { User, Post } = require('../data')

function updatePost(userId, postId, image, text) {
    validateId(userId)
    validateId(postId)
    validateUrl(image)
    validateText(text)

    return Promise.all([User.findById(userId).lean(), Post.findById(postId)])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (post.author.toString() !== userId) throw new Error('post does not belong to user')

            post.image = image
            post.text = text

            return post.save()
        })
        .then(() => { })
}

module.exports = updatePost
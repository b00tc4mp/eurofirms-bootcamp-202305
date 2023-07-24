const { User, Post } = require('../data')
const { validateId, validateUrl, validateText } = require('./helpers/validators')

function updatePost(userId, postId, image, text) {
    validateId(userId)
    validateId(postId)
    validateUrl(image)
    validateText(text)

    return Promise.all([User.findById(userId).lean(), Post.findById(postId)])
        .then(([user, post]) => {

            if (!user) throw new Error('User not found')
            if (!post) throw new Error('Post not found')

            const author = post.author.toString()

            if (userId !== author) throw new Error('this post does not belong to this user')

            post.image = image
            post.text = text

            return post.save()

        })
        .then(() => { })
}
module.exports = updatePost 
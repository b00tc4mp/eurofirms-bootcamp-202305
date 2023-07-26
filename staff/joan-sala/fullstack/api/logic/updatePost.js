const { validateId, validateText, validateUrl } = require('./helpers/validators')
const { User, Post } = require('../data')

function updatePost(userId, postId, image, text) {
    validateId(userId)
    validateId(postId)
    validateUrl(image)
    validateText(text)

    return Promise.all([User.findById(userId).lean(), Post.findById(postId)])
        .then(([user, post]) => {
            if (!user) throw new Error('User not found')
            if (!post) throw new Error('Post not found')

            if (post.author.toString() !== userId) throw new Error('Post does not belong to user')
            post.image = image
            post.text = text
            
            return post.save()
        })
        .then(()=> {})
}
module.exports = updatePost
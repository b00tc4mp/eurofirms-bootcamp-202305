const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId } = require('./helpers/validators')

function retrievePost(userId, postId) {
    validateId(userId)
    validateId(postId)

    const userObjectId = new ObjectId(userId)

    const postObjectId = new ObjectId(postId)

    return Promise.all([context.users.findOne({ _id: userObjectId}), context.posts.findOne({ _id: postObjectId})])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (post.author.toString() !== userId) throw new Error('post does not belong to this user')

            delete post._id
            delete post.author
            delete post.date

            return post

        })
}

module.exports = retrievePost
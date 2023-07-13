const { ObjectId } = require('mongodb')
const context = require('./context')
const { validateId } = require('./helpers/validators')

function retrievePost(userId, postId) {
    validateId(userId)
    validateId(postId)

    const { users, posts } = context

    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)

    //Búsqueda completa, devuelve una cadena de promesas
    return Promise.all([context.users.findOne({ _id: userObjectId }),
    context.posts.findOne({ _id: postObjectId })])
        .then(([user, post]) => {
            if (!user) throw new Error('User not found')
            if (!post) throw new Error('Post not found')

            if (post.author.toString() !== userId) throw new Error('post does not belong to user')

            delete post._id
            delete post.author
            delete post.date

            return posts
        })
}
module.exports = retrievePost
const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId } = require('./helpers/validators')

function deletePost(userId, postId) {
    validateId(userId)
    validateId(postId)

    // steps
    // - find user by id and validate it exists
    // - find post by id and validate it exists
    // - validate user is author of post
    // - delete post by id

    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)

    return Promise.all([context.users.findOne({ _id: userObjectId }), context.posts.findOne({ _id: postObjectId })])
        // .then(results => {
        //     //const user = results[0]
        //     //const post = results[1]
        //     const [user,post] = results
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (post.author.toString() !== userId) throw new Error('post does not belong to user')

            return context.posts.deleteOne({ _id: postObjectId })
        })
        .then(() => { })
}

module.exports = deletePost
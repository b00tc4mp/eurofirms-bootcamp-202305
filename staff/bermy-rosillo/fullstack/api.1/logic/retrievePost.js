// steps
// - find user by id and validate it exists
// - find post by id and validate it exists
// - validate user is author of post
// - sanitize and return post

const context = require('.context')
const { ObjectId } = require('mongodb')

function retrievePost(userId, postId) {
    
    if (typeof userId != 'string') throw new Error('User id must be a string')
    if (userId === '') throw new Error('User id empty')
    if (typeof postId != 'string') throw new Error('Post id must be a string')
    if (postId === '') throw new Error(' Post id empty')

    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)

    return Promise.all([ context.users.findOne({ _id: userObjectId }), context.posts.findOne({ _id: postObjectId })])
        .then(([user, post]) => {

            if (!user) throw new Error('User not found')
            if (!post) throw new Error('Post not found')

            const author = post.author.toString()

            if (userId !== author) throw new Error('this post does not belong to this user')

            delete post._id
            delete post.author
            delete post.date

            return post
        })
}
module.exports = retrievePost

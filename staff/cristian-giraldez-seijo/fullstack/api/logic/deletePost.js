/**
 * The `deletePost` function deletes a post from the database if the post belongs to the specified
 * user.
 * @param postId - The ID of the post that needs to be deleted.
 * @param userId - The userId parameter is the unique identifier of the user who wants to delete the
 * post.
 * @returns The function `deletePost` is returning a promise.
 */
const context = require('./context')
const stringValidator = require('./stringValidator')
const mongodb = require('mongodb')
const { ObjectId } = mongodb

function deletePost(postId, userId) {
    stringValidator(postId, 'postId')
    stringValidator(userId, 'userId')

    return Promise.all([context.users.findOne({ _id: new ObjectId(userId) }), context.posts.findOne({ _id: new ObjectId(postId) })])
    .then(([user, post])=>{
        if (!user) throw new Error('User not found!')
        if (!post) throw new Error('Post not found!')
        if (post.author.toString() !== userId) throw new Error('Post does not belong to user!')
        return context.posts.deleteOne({_id:new ObjectId(postId)})
    })
    .then(()=>{})
}
module.exports = deletePost
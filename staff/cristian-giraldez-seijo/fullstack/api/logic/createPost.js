/**
 * The function `createPost` creates a new post by validating the input parameters and inserting a new
 * document into the `posts` collection in the MongoDB database.
 * @param userId - The userId parameter is the unique identifier of the user who is creating the post.
 * @param image - The `image` parameter is a string that represents the image associated with the post.
 * @param text - The `text` parameter is a string that represents the content or message of the post.
 * @returns The function `createPost` is returning a promise.
 */
const context = require('./context')
const stringValidator = require('./stringValidator')
const mongodb = require('mongodb')
const { ObjectId } = mongodb

function createPost(userId, image, text) {
    stringValidator(userId, 'userId')
    stringValidator(image, 'image')
    stringValidator(text, 'text')
    return context.users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error('User not found!')
            return context.posts.insertOne({ author: user._id, image, text, date: new Date() })
        })
        .then(()=>{})
}
module.exports = createPost
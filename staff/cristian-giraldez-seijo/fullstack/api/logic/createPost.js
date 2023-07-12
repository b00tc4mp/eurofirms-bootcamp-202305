/**
 * The function `createPost` takes in a user ID, an image URL, and text as parameters, validates the
 * input, and creates a new post in the database with the provided information.
 * @param userId - The userId parameter is the unique identifier of the user who is creating the post.
 * @param image - The `image` parameter is a string that represents the URL of an image.
 * @param text - The `text` parameter is a string that represents the content of the post.
 * @returns The function `createPost` is returning a promise.
 */
const context = require('./context')
const { validateEmail, validatePassword, validateId, validateUrl, validateText } = require('./helpers/validators')
const mongodb = require('mongodb')
const { ObjectId } = mongodb

function createPost(userId, image, text) {

    validateId(userId)
    validateUrl(image)
    validateText(text)
    return context.users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error('User not found!')
            return context.posts.insertOne({ author: user._id, image, text, date: new Date() })
        })
        .then(() => { })
}
module.exports = createPost
const context = require('./context')
const { ObjectId } = require('mongodb')

function createPost(userId, image, text) {
    // TODO implement this. post = { author: new ObjectId(userId), image, text, date: new Date }

    if (typeof userId !== 'string') throw new Error('userIdnot string')
    if (userId === '') throw new Error('UserId is empty')
    if (typeof image !== 'string') throw new Error('Email is not a string')
    if (image === '') throw new Error('Image is empty')
    if (typeof text !== 'string') throw new Error('Text is not a string')
    if (text === '') throw new Error('Text is empty')

    return context.users.findOne({ email })
        .then(user => {
            if (user) throw new Error('User already exist')

            return context.users.insertOne({ userId, image, text })
        })
}
module.exports = registerUser

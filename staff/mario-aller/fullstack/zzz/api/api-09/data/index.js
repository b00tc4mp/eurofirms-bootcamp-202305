const { Schema, ObjectId, model } = require('mongoose')

const userSch = new Schema({
    name: {
        type: String,
        required: true,
        default: 'No name'
    },
    email: {
        type: String,
        required: true,
        default: 'no_email@no_domain.com',
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 3
    },
    favs: [
        {
            type: ObjectId,
            ref: 'Post'
        }
    ]
})

const postSch = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true,
        default: 'http://no_image'
    },
    text: {
        type: String,
        required: true,
        default: '-'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = model('User', userSch)
const Post = model('Post', postSch)

module.exports = { User, Post }
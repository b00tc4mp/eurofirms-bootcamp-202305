const {Schema, model, ObjectId} = require('mongoose')

const user = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    }, 
    description: {
        type: String
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 9
    },
    favPosts: [
        {
            type: ObjectId, 
            ref: 'Post'
        }
    ],
    following: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ]
})

const post = new Schema({
    text: {
        type: String,
        required: true 
    },
    image: {
        type: String,
        required: true
    }, 
    likes: {
        type: Number,
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    },
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    }
})

const User = model('User', user)
const Post = model('Post', post)

module.exports = {User, Post}
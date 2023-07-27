const { Schema, ObjectId, model } = require('mongoose')

const comment = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
})

const user = new Schema({
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    favs: [
        {
            type: ObjectId,
            ref: 'Story'
        }
    ]
})

const story = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    sumary: {
        type: String
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    children: [
        {
            type: ObjectId,
            ref: 'Story'
        }
    ],
    comments: [comment]
})

const User = model('User', user)
const Story = model('Story', story)

module.exports = {
    User,
    Story
}
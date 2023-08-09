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
    title: {
        type: String,
        required: true
    },
    sumary: {
        type: String
    },
    text: {
        type: String
    },
    origin: {
        type: ObjectId,
        ref: 'Story'
    },
    question: {
        type: String,
        default: 'What\'s next?',
        required: true
    },
    options: [
        {
            type: ObjectId,
            ref: 'Story'
        }],
    shortcut: {
        type: Boolean,
        default: false
    },
    datecreated: {
        type: Date,
        default: Date.now,
        required: true
    },
    dateupdated: {
        type: Date,
        default: Date.now,
        required: true
    },
    comments: [comment]
})

const User = model('User', user)
const Story = model('Story', story)

module.exports = {
    User,
    Story
}
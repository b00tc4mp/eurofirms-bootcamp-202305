const { Schema, ObjectId, model } = require('mongoose')

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    image: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    styles: [
        {
            type: String
        }
    ],
    songs: [
        {
            type: String
        }
    ],
    albums: [
        {
            type: String
        }
    ],
    bands:[
        {
            type: String
        }
    ],
    musicians:[
        {
            type: String
        }
    ]
})

const User = model('User', user)

module.exports = {
    User
}
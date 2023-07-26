const { Schema, ObjectId, model } = require('mongoose')

const user = new Schema({
    name: {
        type: String,
        required: true
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
    }
})

const tasteInMusic = new Schema ({
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
    disks: [
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
    ],
    user: {
        type: ObjectId,
        required: true
    }
})

const User = model('User', user)

const Post = model('Post', post)

module.exports = {
    User,
    Post
}
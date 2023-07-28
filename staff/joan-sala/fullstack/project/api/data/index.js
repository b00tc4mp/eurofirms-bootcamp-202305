//schema for type user, posts and methods
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
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    // image: {
    //     type: String,
    //     required: optional
    // },
    favs: [
        {
            type: ObjectId,
            ref: 'Post'
        }
    ]
})

const post = new Schema({
    name: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    // video: {
    //     type: String,
    //     required: optional
    // },
    // description: {
    //     type: String,
    //     required: true
    // },
    // type: {
    //     type: String,
    //     require: true
    // },
    date: {
        type: Date,
        default: Date.now
    },
    // adress:{
    //     type: ObjectId,
    //     ref: 'name'
    // }
})
//Constructor que permite saber que usuario es
const User = model('User', user)
const Post = model('Post', post)

module.exports = {
    User,
    Post
}
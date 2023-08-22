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
    
    image: {
        type: String,
        required: true
        //required: optional
    },
    favs: [
        {
            type: ObjectId,
            ref: 'Meetup'
        }
    ]
})

const meetup = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    video: {
        type: String,
        optional: true
    },
    //description
    text: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    adress:{
        type: String
    },
    dateMeetup: {
        type: Date,
        required: true
    },
    likes:{
        type:Number,
        required: true,
        default: 0
    }
 
})
const User = model('User', user)
const Meetup = model('Meetup', meetup)

module.exports = {
    User,
    Meetup
}
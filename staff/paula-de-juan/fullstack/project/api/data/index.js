const { Schema, ObjectId, model } = require('mongoose')

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
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
    }
})

const musicTaste = new Schema ({
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
    ],
    description: {
            type: String
        }
    ,
    user: {
        type: ObjectId,
        required: true
    }
})

const User = model('User', user)

const MusicTaste = model('MusicTaste', musicTaste)

module.exports = {
    User,
    MusicTaste
}
//Data Models
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
    favs: [
        {
            type: ObjectId,
            ref: 'Artworks'
        }
    ],
    dateConstructor: {
        type: Date,
    },
    zip: {
        type: String,
        optional: true 
    },
    phone: {
        type: String,
        optional: true 
    }
})

const artwork = new Schema({
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
    description: {
        type: String,
        required: true
    },
     date: {
        type: Date,
        required: true,
        default: Date.now

    },
    materials:  {
        type: String, 
        required: true
    },
    ornaments: [{
        type: String,
        required: true
    }]
})

const workshop = new Schema({
    planner: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    
    attendants: {
        type: ObjectId,  
        required: true 
    }, 
    place: {
        type: String,
        required: true
    },
    codeZIP: {
        type: String, 
        required: true
    },
    datestart: {
        type: Date, 
        required: true
    },
    dateend: {
        type: Date, 
        required: true
    },
    image: {
        type: String,
        optional: true
    },
    video: {
        type: String,
        optional: true
    },
    description: {
        type: String,
        required: true
    },
    attendantsLimit: {
        type: Number, 
        required: true
    }
})

const User = model('User', user)
const Artwork = model('Artwork', artwork)
const Workshop = model('Workshop', workshop)

module.exports = {
    User,
    Artwork,
    Workshop  
}
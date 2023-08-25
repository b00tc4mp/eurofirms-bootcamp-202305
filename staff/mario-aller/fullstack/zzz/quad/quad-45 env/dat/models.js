const { Schema, ObjectId, model } = require('mongoose')

/* The `userSchema` is defining the structure and properties of a user document in a MongoDB
collection. It specifies the fields that a user document should have, along with their data types
and validation rules. */
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'No name'
    },
    surname: {
        type: String,
        default: '-'
    },
    zip: {
        type: String,
        default: '-'
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
    date: {
        type: Date,
        default: Date.now
    }
})
/* The `panelSchema` is defining the structure and properties of a panel document in a MongoDB
collection. It specifies the fields that a panel document should have, along with their data types
and validation rules. */
const panelSchema = new Schema({
    reference: {
        type: String,
        required: true,
        default: null
    },
    owner: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        required: true,
        // enum: [0, 1, 2],
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    blocks: [{
        x: {
            type: Number,
            required: true,
            default: -1
        },
        y: {
            type: Number,
            required: true,
            default: -1
        },
        width: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true,

        },
        orientation: {
            type: Number,
            required: true,
            enum: [0, 1],
            default: 0
        },
        date: {
            type: Date,
            default: Date.now
        }
    }]
})

const UserModel = model('User', userSchema)
const PanelModel = model('Panel', panelSchema)

module.exports = { UserModel, PanelModel }
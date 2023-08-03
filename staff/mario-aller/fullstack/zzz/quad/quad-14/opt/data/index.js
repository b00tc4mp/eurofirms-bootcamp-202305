const { Schema, ObjectId, model } = require('mongoose')

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
        enum: [0, 1, 2],
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
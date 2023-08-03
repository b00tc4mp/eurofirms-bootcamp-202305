const { Schema, ObjectId, model } = require('mongoose')

const userSch = new Schema({
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
const blockSch = new Schema({
    panel: {
        type: ObjectId,
        required: true,
        ref: 'Panel'
    },
    x: {
        type: Number,
        required: true,
        default: -1n
    },
    y: {
        type: Number,
        required: true,
        default: -1n
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
})

const panelSch = new Schema({
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
        enum: [0, 1],
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = model('User', userSch)
const Block = model('Block', blockSch)
const Panel = model('Panel', panelSch)

module.exports = { User, Block, Panel }
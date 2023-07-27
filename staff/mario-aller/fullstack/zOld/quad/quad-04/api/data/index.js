const { Schema, model } = require('mongoose')

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

    // poner la referencia al reves
    panels: [
        {
            type: ObjectID,
            ref: 'Panel'
        }
    ]
})
const blockSch = new Schema({
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
    }
})
const panelSch = new Schema({
    reference: {
        type: String,
        required: true,
        default: null
    },
    owner: {
        type: ObjectID,
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
    blocks: [
        {
            type: ObjectID,
            ref: 'Block'
        }
    ],
    status: {
        type: Number,
        required: true,
        enum: [0, 1],
        default: 0
    }
})

const User = model('User', userSch)
const Block = model('Block', blockSch)
const Panel = model('Panel', panelSch)

module.exports = { User, Block, Panel }
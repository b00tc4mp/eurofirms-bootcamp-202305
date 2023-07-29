//data model
const { Schema, ObjectId, model } = require('mongoose')

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum:['teacher', 'student'],
        required: true
    }

})

const test = new Schema({
    subject: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    attemps:{
        type:Number,
        required:true
    },

    teacher: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    date: {
        type: Date,
        default: Date.now
    }
})
// student's answer 
const answer = new Schema({
    test: {
        type: ObjectId,
        ref: 'Test',
        required: true
    },

    student: {
        type: ObjectId,
        ref:'User',
        required: true
    },

    description: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    score: {
        type: Number,
        
    },

    assessment: {
        type: String,
       
    },

    assessmentDate: {
        type: Date,
        default: Date.now
    }
})

const User = model('User',user)
const Test = model('Test',test)
const Answer = model('Answer', answer)

module.exports ={User,Test,Answer}
//do schema for type user and posts
const{Schema, ObjectId,model} = require('mongoose')

const user = new Schema({
    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    favs:[
        {
            type:ObjectId,
            ref:'Post'
        }
    ]

})

const post = new Schema({
    author:{
        type:ObjectId,
        ref: 'User', //relaciona a la coleccion de usuarios con el ObjectId
        required: true
    },
    image:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const User = model('User',user)
const Post = model('Post',post)

module.exports ={User,Post}
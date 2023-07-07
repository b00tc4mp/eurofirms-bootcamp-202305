/*
Importing packages
*/
const context = require('./context')
const mongodb = require('mongodb')
const createPost = require('./createPost')

const {MongoClient} = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')
                                
client.connect()
.then(connection=>{
    const db = connection.db('data')

    context.users = db.collection('users')
    context.posts = db.collection('posts')

    try{
        return createPost('649da817ca082f91d970772e','https://media.revistagq.com/photos/6319a89ae28aa58de71acbb4/4:3/w_1064,h_798,c_limit/Pinocchio.jpg','pinocho and pepito')
        .then(()=>console.log('Post created'))
        .catch(error=>console.error(error))

    }catch(error){
        console.error(error)
    }
})
.catch(error=>console.error(error)) //db error connection
.finally(()=>client.close())
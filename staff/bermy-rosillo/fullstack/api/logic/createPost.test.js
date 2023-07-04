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
    const dataabse = connection.database('data')

    context.users = dataabse.collection('users')
    context.posts = dataabse.collection('posts')

    try{
        return createPost('idPost','url-img','text')
        .then(()=>console.log('Post created'))
        .catch(error=>console.error(error))

    }catch(error){
        console.error(error)
    }
})
.catch(error=>console.error(error)) //db error connection
.finally(()=>client.close())
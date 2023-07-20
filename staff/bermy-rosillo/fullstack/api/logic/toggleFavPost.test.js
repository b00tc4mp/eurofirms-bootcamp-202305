const context = require('./context')
const mongodb = require('mongodb')
const toggleFavPost = require('./toggleFavPost')

const {MongoClient} = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
.then(connection=>{
    const db = connection.db('data')

    context.users = db.collection('users')
    context.posts = db.collection('posts')

    try{
        return toggleFavPost('649da817ca082f91d970772e','64aff80d6ef2450f1e351018')
        .then(()=>console.log('Favorite Post success '))
        .catch(error=>console.error(error))

    }catch(error){
        console.error(error)
    }
})
.catch(error=>console.error(error))
.finally(()=>client.close())
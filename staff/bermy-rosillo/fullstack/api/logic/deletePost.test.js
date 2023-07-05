const context = require('./context')
const {MongoClient} = require('mongodb')
const deletePost = require('./deletePost')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
.then(connection=>{

    const db = connection.db('data')
    context.users = db.collection('users')
    context.posts = db.collection('posts')

    try{
        return deletePost('649da817ca082f91d970772e','64a55e7a2807d7840c380c3c')
        .then(()=>console.log('Post deleted'))
        .catch(error=>console.error(error))

    }catch(error){
        console.error(error)
    }   
})
.catch(error=>console.error(error))
.finally(()=>client.close())
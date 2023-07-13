const context = require('./context')
const {MongoClient} = require('mongodb')
const retrievePost = require('./retrievePost')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
.then(connection=>{

    const db = connection.db('data')
    context.users = db.collection('users')
    context.posts = db.collection('posts')

    try{
        return retrievePost('649da817ca082f91d970772e','postId')
        .then(post=>console.log('retrieved Post ',post))
        .catch(error=>console.error(error))

    }catch(error){
        console.error(error)
    }
})
.catch(error=>console.error(error))
.finally(()=>client.close() )

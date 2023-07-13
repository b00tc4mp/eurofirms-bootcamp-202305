//importing packages
const context = require('./context')
const {MongoClient} = require('mongodb')
const retrievePosts = require('./retrievePosts')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
.then(connection=>{

    const database = connection('data')
    const users = database.collection('users')
    const posts = database.collection('posts')

    context.users = users
    context.posts = posts

    try{
        return retrievePosts('userId')
        .then(posts=>console.log('posts retrieved',posts))
        .catch(error=>console.error(error))

    }catch(error){
        console.error(error)
    }
})
.catch(error=>console.error(error))
.finally(()=>client.close())
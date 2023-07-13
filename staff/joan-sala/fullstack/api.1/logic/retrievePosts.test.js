const retrievePosts = require('./retrievePosts')
const mongodb = require('mongodb')
const context = require('./context')

const {MongoClient} = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')
        
        const users = db.collection('users')
        const posts = db.collection('posts')

        context.users =  users
        context.posts =  posts

        try{
            return retrievePosts('64a463259fc8d137df522c61')
                .then(posts =>{
                    console.log('post retrieve', posts)
                })
                .catch(error => console.error(error)) 
        }catch(error){
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(()=> client.close())
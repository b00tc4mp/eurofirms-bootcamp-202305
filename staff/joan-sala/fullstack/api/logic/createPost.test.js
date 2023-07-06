const mongodb = require('mongodb')
const context = require('./context')
const createPost = require('./createPost')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')
        const posts = db.collection('posts')

        context.users = users
        context.posts = posts

        try {
            return createPost('64a537b58b862f64c2596ed2', 'https://images.freeimages.com/images/previews/155/red-starfish-1162380.jpg', 'estrella')
                .then(() => console.log('Post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(()=>{
        client.close()
    })
    
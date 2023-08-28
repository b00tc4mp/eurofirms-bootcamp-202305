const mongodb = require('mongodb')
const context = require('./context')
const createPost = require('./createPost')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        //const db = connection.db('data') 
        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')

        try {
            return createPost('64a06502facba8de245a0405', 'http://image.com/123', 'hola mundo')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => client.close())
const createPost = require('./createPost')
const mongodb = require('mongodb')
const context = require('./context')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')

        context.users = users

        const posts = db.collection('posts')

        context.posts = posts

        try {
            return createPost ('64a53972a7376ccc8e8f1f59', 'https://img2.rtve.es/i/?w=1600&i=1565264925747.jpg', 'Beatles in the street')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => client.close())
/* The code is connecting to a MongoDB database and updating a post using the `updatePost` function. */
const updatePost = require('./updatePost')
const mongodb = require('mongodb')
const context = require('./context')

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
            return updatePost('64a40c4a167445c6864b1898', '64a40c85167445c6864b1899', 'http://image.com/heidi', 'hello heidi')
                .then(() => console.log('post updated'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => client.close())
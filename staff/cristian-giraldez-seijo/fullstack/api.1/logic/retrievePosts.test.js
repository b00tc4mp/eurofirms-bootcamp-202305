/* The code you provided is connecting to a MongoDB database and retrieving posts using the
`retrievePosts` function. Here is a breakdown of what the code is doing: */
const retrievePosts = require('./retrievePosts')
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
            return retrievePosts('64a3235e0c5b37d559671976')
                .then(posts => console.log('posts retrieved', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => client.close())
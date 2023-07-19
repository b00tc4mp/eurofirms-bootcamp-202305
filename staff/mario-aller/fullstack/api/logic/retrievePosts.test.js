const context = require('./context')
const mongodb = require('mongodb')
const authenticateUser = require('./authenticateUser')
const retrievePosts = require('./retrievePosts')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')
        try {
            return authenticateUser('frodo@bolson-cerrado.com','mitril')
                .then((userId) => {
                    return retrievePosts(userId)
                })  
                .then(posts => console.log(posts))
        } catch (err) { console.error(err) }
    })
    .catch(err => console.error(err))
    .finally(() => {
        context.users = null
        context.posts = null
        client.close()
    })
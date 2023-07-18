const context = require('./context')
const mongodb = require('mongodb')
const getIdUser = require('./getIdUser')
const deletePost = require('./deletePost')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')
        try {
            return getIdUser('frodo@bolson-cerrado.com')
                .then((userId) => {
                    return deletePost(userId, '64a5ce16636791c800fa0090')
                })
        } catch (err) { console.error(err) }
    })
    .catch(err => console.error(err))
    .finally(() => {
        context.users = null
        context.posts = null
        client.close()
    })

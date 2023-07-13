const ctx = require('./ctx')
const mongodb = require('mongodb')
const getIdUser = require('./getIdUser')
const retrievePosts = require('./retrievePosts')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        ctx.users = connection.db('data').collection('users')
        ctx.posts = connection.db('data').collection('posts')
        try {
            return getIdUser('bilbo@bolson-cerrado.com')
                .then((userId) => {
                    return retrievePosts(userId)
                })
                .then(posts => console.log(posts))
                .catch(err => console.error(err))
        } catch (err) { console.error(err) }
    })
    .catch(err => console.error(err))
    .finally(() => {
        ctx.users = null
        ctx.posts = null
        client.close()
    })
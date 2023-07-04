const ctx = require('./ctx')
const mongodb = require('mongodb')
const authenticateUser = require('./authenticateUser')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        ctx.users = connection.db('data').collection('users')
        try {
            return authenticateUser('beatles2@yah.com', '123')
                .then((userId) => console.log(userId))
                .catch(err => console.error(err))
        } catch (err) { console.error(err) }
    })
    .catch(err => console.error(err))
    .finally(() => {
        ctx.users = null
        client.close()
    })

const mongodb = require('mongodb')
const context = require('./context')
const registerUser = require('./registerUser')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(conex => {
        context.users = conex.db('data').collection('users')
        return registerUser('McCartney', 'beatles2@yah.com', '123')
    })
    .catch(err => console.error(err))
    .finally(() => client.close())

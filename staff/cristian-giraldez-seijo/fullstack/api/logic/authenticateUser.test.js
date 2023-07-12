/* The code is establishing a connection to a MongoDB database using the `mongodb` package. */
const mongodb = require('mongodb')
const context = require('./context')
const authenticateUser = require('./authenticateUser')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(conex => {
        context.users = conex.db('data').collection('users')
        context.posts = conex.db('data').collection('posts')
        try {
        return authenticateUser('beatles2@yah.com', '123123123')
            .then ((userId) => console.log(userId))
            .catch(error=>console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(err => console.error(err))
    .finally(() => client.close())
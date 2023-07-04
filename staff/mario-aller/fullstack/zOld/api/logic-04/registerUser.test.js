const ctx = require('./ctx')
const mongodb = require('mongodb')
const registerUser = require('./registerUser')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(conection => {
        ctx.users = connection.db('data').collection('users')
        try {
            return registerUser('McCartney', 'beatles2@yah.com', '123')
        } catch (err) {
            console.error(err)
        }
    })
    .catch(err => console.error(err))
    .finally(() => {
        ctx.users = null
        client.close()
    })


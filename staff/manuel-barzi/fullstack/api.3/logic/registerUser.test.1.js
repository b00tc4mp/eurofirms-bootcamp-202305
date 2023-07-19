const registerUser = require('./registerUser')
const mongodb = require('mongodb')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')

        return registerUser(users, 'Pepito Grillo', 'pepito@grillo.com', '123123123')
            .then(() => console.log('user created'))
    })
    .finally(() => client.close())

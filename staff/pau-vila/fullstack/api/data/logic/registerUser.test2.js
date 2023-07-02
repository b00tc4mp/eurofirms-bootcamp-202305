const registerUser = require('./registerUser')
const mongodb = require('mongodb')
const context = require('./context')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')

        context.users = users
        try {
            return registerUser(users, 'Iron Man', 'iron@man.com', '1234')
                .then(() => console.log('user created'))
        } catch (error) {
            console.error(error)
        }
    })
    .finally(() => client.close())
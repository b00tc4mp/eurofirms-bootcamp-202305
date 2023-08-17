const authenticateUser = require('./authenticateUser')
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
            return authenticateUser('wendy@darling.com', '123123123')
                .then(userId => console.log('user authenticated', userId))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => client.close())

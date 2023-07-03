const retrieveUser = require('./retrieveUser')
const mongodb = require('mongodb')
const context = require('./context')

const { MongoClient } = mongodb

const client = new MongoClient("mongodb://127.0.0.1:27017")

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')

        context.users = users

        try {
            return retrieveUser('649da1a35792d969ba2738cb')
            .then(user => console.log('user retrieve', user))
            .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .finally(() => client.close())
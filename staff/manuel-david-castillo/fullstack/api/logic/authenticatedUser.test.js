const authenticatedUser = require('./authenticatedUser')
const mongodb = require('mongodb')
const context = require('./context')

const { MongoClient } = mongodb 
/* const MongoClient = mongodb.MongoClient   LO DE ARRIBA */

const client = new MongoClient("mongodb://127.0.0.1:27017")

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')

        context.users = users

        try {
            return authenticatedUser('peter@pan.com', '123123123')
            .then(userId => console.log('user authenticated', userId))
            .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    })
    .finally(()=> client.close())
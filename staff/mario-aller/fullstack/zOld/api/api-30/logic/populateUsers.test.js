const context = require('./context')
const mongodb = require('mongodb')
const registerUser = require('./registerUser')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        context.users = connection.db('data').collection('users')
        try {
            return registerUser('Frodo Bolson', 'frodo@bolson-cerrado.com', 'mitril')
                .then(() => registerUser('Bilbo Bolson', 'bilbo@bolson-cerrado.com', 'dardo'))
                .then(() => registerUser('Meriadoc Brandigamo', 'merry@comarca.com', 'rohan'))
                .then(() => registerUser('Peregrin Tuk', 'pippin@comarca.com', 'gondor'))
        } catch (err) {
            console.error(err)
        }
    })
    .catch(err => console.error(err))
    .finally(() => {
        context.users = null
        client.close()
    })
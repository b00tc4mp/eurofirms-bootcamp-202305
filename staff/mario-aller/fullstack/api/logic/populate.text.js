const mongodb = require('mongodb')
const context = require('./context')
const registerUser = require('./registerUser')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

function regUserAgregate(userName, mail, pwd) {

    client.connect()
        .then(connection => {
            context.users = connection.db('data').collection('users')
            try {
                return registerUser(userName, mail, pwd)
            } catch (err) {
                console.error(err)
            }
        })
        .catch(err => console.error(err))
        .finally(() => {
            context.users = null
            client.close()
        })
}


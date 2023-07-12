/* The code you provided is connecting to a MongoDB database and registering a user. Here's a breakdown
of what each part of the code is doing: */
const mongodb = require('mongodb')
const context = require('./context')
const registerUser = require('./registerUser')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(conex => {
        context.users = conex.db('data').collection('users')
        try {
            return registerUser('McCartney', 'beatles8@yah.com', '123123123')
            .then(()=>console.log('User Registered!'))
                .catch(err => console.error(err))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(err => console.error(err))
    .finally(() => client.close())
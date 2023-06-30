const mongodb = require('mongodb')
const context = require('./context')
const registerUser = require('./registerUser')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(conex => {
        context.users = conex.db('data').collection('users')
        context.posts = conex.db('data').collection('posts')
        try {
            return registerUser('Juan', 'juan@yah.com', '123')
                .then((result) => {
                    console.log(result)
                    return context.users.find().toArray()
                        .then((dataUsers) => console.log(dataUsers))
                        .catch(err => console.error(err))
                })
        } catch (err) { console.error(err) }
    })
    .finally(() => client.close())

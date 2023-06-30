const mongodb = require('mongodb')
const context = require('./context')

const registerUser = require('./registerUser')
const retrieveAll = require('./retrieveAll')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(conex => {
        context.users = conex.db('data').collection('users')
        context.posts = conex.db('data').collection('posts')
        try {
            return registerUser('Pedro', 'pedro@yah.com', '123')
                .then((result) => {
                    console.log(result)
                    return retrieveAll(context.users)
                        .then((dataUsers) => console.log(dataUsers))
                })
        } catch (err) { console.error(err) }
    })
    .finally(() => client.close())

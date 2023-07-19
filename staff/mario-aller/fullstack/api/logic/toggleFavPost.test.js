const toggleFavPost = require('./toggleFavPost')
const mongodb = require('mongodb')
const context = require('./context')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')

        try {
            return toggleFavPost('64ac3ac5b7b35e691fe98c12', '64a842f6944ba5e3f839116a')
                .then(() => console.log('Favorite toggle Ok'))
                .catch(error => console.error(error))
        } catch (error) { console.error(error) }
    })
    .catch(error => console.error(error))
    .finally(() => client.close())
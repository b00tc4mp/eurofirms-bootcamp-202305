const deletePost = require('./deletePost')
const mongodb = require('mongodb')
const context = require('./context')

const {MongoClient} = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const posts = db.collection('posts')
        const users = db.collection('users')

        context.posts = posts
        context.users = users

        try {
            return deletePost('649da1a35792d969ba2738cb', '64a41d7d2eea54655b4106a5')
            .then(()=> console.log('delete post'))
            .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(()=> client.close())
/* The code is setting up a connection to a MongoDB database and configuring the context object.*/
const context = require('./context')
const mongodb = require('mongodb')
const deletePost = require('./deletePost')
const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')
        const users = db.collection('users')
        const posts = db.collection('posts')
        context.users = users
        context.posts = posts

        try {
            return deletePost('64a56cdcf8239e0dc5621277', '649da70890d9f163cdc8b060')
                .then(() => console.log('Post deleted!'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error=>console.error(error))
    .finally(()=>client.close())
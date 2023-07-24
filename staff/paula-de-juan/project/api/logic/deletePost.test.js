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

        try { return deletePost('64a1c914c1092772a1c71c2f', '64a55f47f3184b35ffd6b786')
            .then(() => console.log('post deleted'))
            .catch(error => console.error(error))
        } catch (error){
            console.error(error)    
        }
    })
    .catch (error => console.error(error))
    .finally (() => client.close())
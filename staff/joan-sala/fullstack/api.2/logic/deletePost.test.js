const deletePost = require('./deletePost')
const mongodb = require('mongodb')
const context = require('./context')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('user')
        const posts = db.collection('post')

        context.users = users
        context.posts = posts

        try{
            return deletePost('64a52e863532b3946bf9fa6f', '64a537b58b862f64c2596ed2')
            .then(() => console.log('Post deleted'))
            .catch(error => console.error(error))
        }catch(error){
            console.error(err)
        }
    })
    .catch(error => console.error(error))
    .finally(()=>{
        client.close()
    })

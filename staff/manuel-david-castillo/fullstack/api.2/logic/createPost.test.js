const createPost = require('./createPost')
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
        return createPost('649da1a35792d969ba2738cb', 'https://cl.buscafs.com/www.levelup.com/public/uploads/images/498938_1140x516.jpg', 'Rick Sanchez')
        .then(()=> console.log('create post'))
        .catch(error => console.error(error)) 
    } catch (error) {
        console.error(error)
    }
 })
 .catch(error => console.error(error))
 .finally(()=> client.close())
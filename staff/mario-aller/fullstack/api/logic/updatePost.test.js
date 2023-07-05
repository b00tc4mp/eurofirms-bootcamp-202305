const context = require('./context')
const mongodb = require('mongodb')
const getIdUser = require('./getIdUser')
const updatePost = require('./updatePost')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')
        try {
            return getIdUser('bilbo@bolson-cerrado.com')
                .then((userId) => {
                    return updatePost(userId, '64a46e38e5c2481599234052', 'Marte', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Schiaparelli_Hemisphere_Enhanced.jpg/280px-Schiaparelli_Hemisphere_Enhanced.jpg')
                })
                .then(posts => console.log(posts))
        } catch (err) { console.error(err) }
    })
    .catch(err => console.error(err))
    .finally(() => {
        context.users = null
        context.posts = null
        client.close()
    })
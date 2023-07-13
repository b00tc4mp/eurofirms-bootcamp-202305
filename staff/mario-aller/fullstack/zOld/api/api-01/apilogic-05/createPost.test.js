const ctx = require('./ctx')
const mongodb = require('mongodb')
const getIdUser = require('./getIdUser')
const createPost = require('./createPost')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        ctx.users = connection.db('data').collection('users')
        ctx.posts = connection.db('data').collection('posts')
        try {
            return getIdUser('frodo@bolson-cerrado.com')
                .then((userId) => {
                    return createPost(userId, 'Luna', 'https://images.ecestaticos.com/PPi0QU13Mwf7rvIVo6xdGUuSWQU=/49x185:2271x1363/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F2dd%2F315%2Fa26%2F2dd315a269978872b1037d7b781c34b5.jpg')
                })
                .cath(err => console.error(err))
        } catch (err) { console.error(err) }
    })
    .catch(err => console.error(err))
    .finally(() => {
        ctx.users = null
        ctx.posts = null
        client.close()
    })

const context = require('./context')
const mongodb = require('mongodb')
const createPost = require('./createPost')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')
        try {
            const author1 = '64a30c04965f546da11f8bd3'
            const author2 = '64a30c04965f546da11f8bd5'

            return createPost(author1, 'Orion', 'https://cdn.eso.org/images/thumb700x/eso1103a.jpg')
                .then(() => createPost(author2, 'Via Lactea', 'https://img2.rtve.es/i/?w=1600&i=1522754812071.jpg'))
                .then(() => createPost(author1, 'Luna', 'https://images.ecestaticos.com/PPi0QU13Mwf7rvIVo6xdGUuSWQU=/49x185:2271x1363/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F2dd%2F315%2Fa26%2F2dd315a269978872b1037d7b781c34b5.jpg'))
        } catch (err) {
            console.error(err)
        }
    })
    .catch(err => console.error(err))
    .finally(() => {
        context.users = null
        client.close()
    })
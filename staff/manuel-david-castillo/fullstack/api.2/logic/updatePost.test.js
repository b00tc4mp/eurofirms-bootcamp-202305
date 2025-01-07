const updatePost = require('./updatePost')
const mongodb = require('mongodb')
const context = require('./context')

const {MongoClient} = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
.then(connection => {
        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')

        try {
            return updatePost('649da1a35792d969ba2738cb', '649dab7319739c7723631958',
                'https://cl.buscafs.com/www.levelup.com/public/uploads/images/498938_1140x516.jpg', 'Ricknillo' )
                .then(post => console.log(post))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
.catch(error => console.error(error))
.finally(()=> client.close())
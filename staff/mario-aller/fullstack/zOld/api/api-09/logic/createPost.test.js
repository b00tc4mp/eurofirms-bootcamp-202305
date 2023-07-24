require('dotenv').config()
const mongoose = require('mongoose')
const authenticateUser = require('./authenticateUser')
const createPost = require('./createPost')

mongoose.connect(process.env.MONGOOSE_URL_TEST)
    .then(() => authenticateUser('gollum@eriador.com','tesoro'))
    .then((userId) => createPost(
                        userId,
                        'https://images.ecestaticos.com/PPi0QU13Mwf7rvIVo6xdGUuSWQU=/49x185:2271x1363/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F2dd%2F315%2Fa26%2F2dd315a269978872b1037d7b781c34b5.jpg',
                        'Luna'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
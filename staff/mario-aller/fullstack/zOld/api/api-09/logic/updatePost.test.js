require('dotenv').config()
const mongoose = require('mongoose')
const authenticateUser = require('./authenticateUser')
const updatePost = require('./updatePost')

mongoose.connect(process.env.MONGOOSE_URL_TEST)
    .then(() => authenticateUser('gollum@eriador.com', 'tesoro'))
    .then((userId) => updatePost(userId,
        '64bbcfc6e5ffe565ed8947aa',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Schiaparelli_Hemisphere_Enhanced.jpg/280px-Schiaparelli_Hemisphere_Enhanced.jpg',
        'Marte'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
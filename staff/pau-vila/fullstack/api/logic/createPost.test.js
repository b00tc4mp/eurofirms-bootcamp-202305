require('dotenv').config()

const createPost = require('./createPost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => createPost('64be2ff2ab1c7f4a76ddc509', 'https://sm.ign.com/t/ign_es/feature/w/when-does-/when-does-loki-take-place-in-the-mcu-timeline_ngmv.1200.jpg', 'no vamos bien'))
    .then(() => console.log('post created'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())

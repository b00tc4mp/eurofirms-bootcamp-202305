require('dotenv').config()
const {mongoose} = require('mongoose')
const sendMessageAndCreateChat = require('./sendMessageAndCreateChat')
const {MONGODB_URL} = process.env

mongoose.connect(`${MONGODB_URL}/instaflan-test`)
.then(()=> sendMessageAndCreateChat('64be4f673d55f3b03ce22b11', '["64c2a23b49d5974c2c044baf"]', 'hello bro'))
.then(()=> console.log('chat created'))
.catch(error => console.error(error))
.finally(() => mongoose.disconnect())
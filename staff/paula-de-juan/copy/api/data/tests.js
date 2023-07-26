const mongoose  = require('mongoose')
require('dotenv').config()
const { User, Post } = require('./models')

console.log('step 1', 'connect')
mongoose.connect(`${process.env.MONGODB_URL}/data`)
    .then(() => {
        console.log('step 2', 'insert user')

       return User.create({ name: 'Pepito', email: 'pepito@perez.com', password: '123123123'})
        .then(user => {
            console.log(user)
        })
    })
    .finally(() => mongoose.disconnect())
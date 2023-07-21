require('dotenv').config()
const mongoose = require('mongoose')
const { User, Post } = require('./models')

mongoose.connect(`${process.env.MONGODB_URL}/data`)
    .then(() => {
        return User.create({ name: 'Lyn X', email: 'lyn@x.com', password: '123123123' })
            .then(user => {
                console.log(user)

                user.name = 'Li On'
                user.email = 'li@on.com'

                return user.save()
            })
            .then(user => {
                console.log(user)
            })

    })
    .finally(() => mongoose.disconnect())
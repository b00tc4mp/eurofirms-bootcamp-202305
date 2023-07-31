require('dotenv').config
const mongoose = require('mongoose')
const { User, Post } = require('./index')

mongoose.connect(`${process.env.MONGODB_URL}/tornorecicla`)
    .then(() => {
        return User.create({ name: 'Bermy Yava', email: 'bermy@yava.com', password: '123123123', zip: '17820', phone: '631954200' })
            .then(user => {
                console.log(user)

                user.name = 'Cris Carayo'
                user.email = 'cris@carayo.com'

                return user.save()
            })
            .then((user) => {
                console.log(user)
            })

    })
    .then(() => User.findById('').lean())
    .then(user => console.log(user))
    .finally(() => mongoose.disconnect())

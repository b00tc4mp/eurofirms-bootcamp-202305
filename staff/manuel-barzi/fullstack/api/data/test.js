require('dotenv').config()
const mongoose = require('mongoose')
const { User, Post } = require('.')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    // .then(() => {
    //     return User.create({ name: 'Lyn X', email: 'lyn@x.com', password: '123123123' })
    //         .then(user => {
    //             console.log(user)

    //             user.name = 'Li On'
    //             user.email = 'li@on.com'

    //             return user.save()
    //         })
    //         .then(user => {
    //             console.log(user)
    //         })

    // })
    .then(() => User.findById('64ba58fc7ec28d08c1679721').lean())
    .then(user => console.log(user))
    .finally(() => mongoose.disconnect())
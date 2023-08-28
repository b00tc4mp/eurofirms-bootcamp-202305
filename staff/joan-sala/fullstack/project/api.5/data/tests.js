require('dotenv').config()
const mongoose = require('mongoose')
const { User, Post } = require('.') 

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => {
        return User.create({ name: 'Benjamin Price', email: 'benjamin@price.com', password: '123123123' })
            .then(user => {
                console.log(user)
                
                user.name = 'Benji Price',
                user.email = 'benjamin@price.com'

                return user.save()
            })
    })
    .finally(() => mongoose.disconnect())


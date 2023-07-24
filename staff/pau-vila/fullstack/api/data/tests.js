require('dotenv').config
const mongoose = require('mongoose')
const { User ,Post } = require('./index')

mongoose.connect(`${process.env.MONGODB_URL}/data`)
    //.then(() => {
       // return User.create({ name: 'Flash Boy', email:'flash@boy.com' , password:'123123123' })
            //.then(user => {
               // console.log(user)

               // user.name = 'Super Man'
                //user.email = 'super@man.com'

                //return user.save()
            //})
           // .then((user) => {
             //   console.log(user)
            //})
            
   // })
    .then(() => User.findById('').lean())
    .then(user =>  console.log(user))
    .finally(() => mongoose.disconnect())

require('dotenv').config()
const authenticateUser = require('./authenticateUser')
const mongoose = require('mongoose')


mongoose.connect(`${process.env.MONGODB_URL}/data`)
    .then(() => {

        try {
            return authenticateUser('ada@lovecraft.com', 'augustaAdaByron')
                .then(userId => console.log('user authenticated', userId))
                .catch(error => console.error(error))
            } catch (error) {
                console.error(error)
            }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
    
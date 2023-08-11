require('dotenv').config()

const createWorkshop = require('./createWorkshop')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
    .then(() => createWorkshop('64d369629f77f7707c1ab22e',
        'Motorcycle made from the trunks of various felled trees ',
        'At the Museo Maritimo, Barcelona',
        '08001', new Date(), new Date() , '13', 
        'https://cdn.pixabay.com/photo/2017/08/28/14/09/motorbike-2689645_1280.jpg',
        'https://youtu.be/WtUSO44DuXk'))
    .then(() => console.log('workshop created'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())

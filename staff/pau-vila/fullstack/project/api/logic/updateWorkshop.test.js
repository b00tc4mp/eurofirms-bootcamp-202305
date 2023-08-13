require('dotenv').config()
const mongoose = require('mongoose')
const updateWorkshop = require('./updateWorkshop')


mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
    .then(() => updateWorkshop('',
        '',
        'At the Museo Maritimo, Barcelona',
        '08001', new Date(), new Date(), 
        'https://cdn.pixabay.com/photo/2017/08/28/14/09/motorbike-2689645_1280.jpg',
        'https://youtu.be/WtUSO44DuXk', 
        'Motorcycle made from the trunks of various felled trees', 13))
    .then(() => console.log('workshops updated'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())

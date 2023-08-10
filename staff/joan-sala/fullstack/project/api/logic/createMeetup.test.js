require('dotenv').config()

const createMeetup = require('./createMeetup')
const mongoose = require('mongoose')

mongoose. connect(`${process.env.MONGODB_URL}/testMeetupBikers`)
    .then(() =>  createMeetup(
        '64cfc4e038db62983870b606', 
        'https://img.freepik.com/free-photo/man-riding-mountain-bike-low-angle_23-2148777253.jpg?size=626&ext=jpg&ga=GA1.2.988299159.1596702882&semt=sph', 
        'https://v4.cdnpk.net/videvo_files/video/free/video0454/large_watermarked/_import_60657a020fbb52.19886494_FPpreview.mp4',
        'traveling with my bike PRUEBA',
        'mountainbike',
        'calle P'
        //'2023/08/31'
    ))
    .then(() => console.log('Meetup created'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())



   
                
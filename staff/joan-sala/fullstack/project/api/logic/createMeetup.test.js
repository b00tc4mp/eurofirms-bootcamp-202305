require('dotenv').config()

const createMeetup = require('./createMeetup')
const mongoose = require('mongoose')

mongoose. connect(`${process.env.MONGODB_URL}/testMeetupBikers`)
    .then(() =>  createMeetup('64c8d11adc2e885906eaba367', 
        'https://cdn.pixabay.com/photo/2023/07/04/19/13/stuart-bailey-8106891_6…', 
        'other'))
    .then(() => console.log('Post created'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())



   
                
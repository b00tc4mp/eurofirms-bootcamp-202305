require('dotenv').config()

const createPost = require('./createPost')
const mongoose = require('mongoose')

mongoose. connect(`${process.env.MONGODB_URL}/test`)
    .then(() =>  createPost('64b7be7db3a200d40c97c6f6', 'https://images.unsplash.com/photo-1682685797527-63b4e495938f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 'watching the sunset'))
    .then(() => console.log('Post created'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())



   
                
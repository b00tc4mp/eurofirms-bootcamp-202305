const mongodb = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const context = require('./logic/context')

const retrievePosts = require('./logic/retrievePosts')
const getIdUser = require('./logic/getIdUser')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')
const api = express()
const jsonBodyParser = bodyParser.json

client.connect()
    .then(connection => {
        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')

        api.get('/', (request, response) => {
            response.send('Ping: hi, everyone!')
        })

        api.get('/posts', (req, res) => {
            return getIdUser('bilbo@bolson-cerrado.com')
                .then(userId => retrievePosts(userId))
                .then((posts) => res.status(200).json(posts))
        })

        api.listen(9000, () => console.log('API funcionando...'))
    })

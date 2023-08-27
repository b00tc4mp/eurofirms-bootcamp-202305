const express = require('express') 
const mongodb = require('mongodb')
const context =  require('./logic/context')
const bodyParser = require('body-parser')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const updatePost = require('./logic/updatePost')

const {MongoClient} = mongodb

const client = new MongoClient("mongodb://127.0.0.1:27017")

client.connect()
    .then((connection)=>{
        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')

        const api = express()

        const jsonBodyParser = bodyParser.json()

        //manejador de respuestas
        api.get('/',(req, res) => {
            res.send('hola mundo')
        })

        api.post('/users', jsonBodyParser, (req, res) => {
            const {name, email, password} = req.body
            
            try {
                registerUser(name, email, password)
                .then(()=> {res.status(201).send()})
                .catch((error) => res.status(400).json({error: error.message}))
            
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        api.post('/users/auth',jsonBodyParser,(req,res)=>{
            const{email,password} = req.body //peticion por medio de insomia

            try{
                authenticateUser(email,password)
                .then(userId=>{
                    res.status(202).json(userId)
                })
                .catch(error=>{
                    res.status(400).json({error: error.message})
                })
            }catch(error){
                res.status(400).json({error:error.message})
            }
        })

        //update post
        api.patch('/posts/:postId',jsonBodyParser,(req,res)=>{
            
            try{
                const {authorization} = req.headers
                const userId = authorization.slice(7)

                const {postId} = req.params
                const {image,text} = req.body
                updatePost(userId,postId,image,text)
                .then(()=>res.status(204).send())
                .catch(error=>res.status(400).json({error:error.message}))
            }catch(error){
                res.status(400).json({error:error.message})

            }
        })
        
        api.listen(9000, ()=> console.log('API running '))
    })
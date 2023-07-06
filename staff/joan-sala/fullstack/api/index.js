//CREACIÓN DE UN MINISERVIDOR
const express = require('express') //Librería/framework/paquete para montar un mini servidor  
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const context =  require('./logic/context')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')

const { MongoClient   } = mongodb

const client = new MongoClient("mongodb://127.0.0.1:27017")

client.connect()
    .then((connection)=>{
        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')

        const api = express()
 
        const jsonBodyParser = bodyParser.json() //devuelve en formato jsonpara recoger cualquier cosa
        
        //end point 01, proceso en la ruta raiz, controlador    
        api.get('/',(req, res) => { //htp://localhost:9000/
            res.send('hola mundo')
        })
        
        //end point EJEMPLE
        api.get('/search', (req, res) =>{
            const q = req.query.q

            res.send(`You requested me to search: ${q}`)
        })
        
        //end point 02
        api.post('/users', jsonBodyParser, (req, res) => { //req:request=petición | res:respuesta si va bien o no
            //debugger 
            const {name, email, password} = req.body
            
            try {  //intenta hacer ésto
                registerUser(name, email, password)
                .then(()=> {res.status(201).send()})
                .catch((error) => res.status(400).json({error: error.message}))
            
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        //end point 03   aclarar que es auth
        api.post('/users/auth', jsonBodyParser, (req, res)=>{
            const { email, password } = req.body //petición por medio de insomnia

            try{
                authenticateUser(email, password)
                .then(userId => {res.status(202).json(userId)})
                .catch((error) => res.status(400).json({error: error.message}))

            }catch(error){
                res.status(400).json({error:error.message}) // para mostrar sólo el 'message' del error
            }
        })



        api.listen(9000, ()=> console.log('API Funciona en el puerto 9000'))
    })
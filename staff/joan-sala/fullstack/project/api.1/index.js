require('dotenv').config() //te trae un objeto que tiene un método para que el te  lo cargue en memoria

//CREACIÓN DE UN MINISERVIDOR
const express = require('express') //Librería/framework/paquete para montar un mini servidor  
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    createPost,
    updatePost,
    deletePost,
    retrievePost,
    retrievePosts, 
    toggleFavPost
} = require('./logic')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const { PORT, MONGODB_URL, JWT_SECRET } = process.env

mongoose.connect(`${MONGODB_URL}/data`)
    .then(() => {
        const api = express()

        const jsonBodyParser = bodyParser.json() //devuelve en formato jsonpara recoger cualquier cosa

        api.use(cors()) //cargar función cors , añadir cabecera 

        //end point 01, proceso en la ruta raiz, controlador    
        api.get('/', (req, res) => { //htp://localhost:9000/
            res.send('hola mundo')
        })

        //end point EJEMPLE
        api.get('/search', (req, res) => {
            const q = req.query.q

            res.send(`You requested me to search: ${q}`)
        })

        //end point 02 REGISTER USER
        api.post('/users', jsonBodyParser, (req, res) => { //req:request=petición | res:respuesta si va bien o no
            //debugger 
            const { name, email, password, image } = req.body

            try {  //intenta hacer ésto
                registerUser(name, email, password,image)
                    .then(() => { res.status(201).send() }) //devuelve únicamente una infirmacióon 
                    .catch((error) => res.status(400).json({ error: error.message }))

            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        //end point 03 AUTHENTICATE USER  aclarar que es author
        api.post('/users/auth', jsonBodyParser, (req, res) => {
            const { email, password } = req.body //petición por medio de insomnia

            try {
                authenticateUser(email, password)
                    .then(userId => {//sub: . el token tiene 3 partes, es una propiedad del peyload
                        const data = { sub: userId }
                        const token = jwt.sign(data, JWT_SECRET)

                        res.json(token)
                    })
                    .catch((error) => res.status(400).json({ error: error.message }))

            } catch (error) {
                res.status(400).json({ error: error.message }) // para mostrar sólo el 'message' del error
            }
        })
        
        //end point 04 RETRIEVE USER
        api.get('/users', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub

                retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })
        
        //end point 05 CREATE POST POST
        api.post('/posts', jsonBodyParser, (req, res) => {

            try {
                const { image, text } = req.body
            
                const token = req.headers.authorization.slice(7)
                const data = jwt.verify(token, JWT_SECRET)
                const userId = data.sub

                createPost(userId, image, text)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })
        
        //end point 06 UPDATE POST
        api.patch('/posts/:postId',jsonBodyParser, (req, res)=>{
            try{
                const token = req.headers.authorization.slice(7)
                const data = jwt.verify(token, JWT_SECRET)
                const userId = data.sub

                const { postId } = req.params
                const { image, text } = req.body

                updatePost(userId, postId, image, text )
                .then(()=> res.status(204).send())
                .catch(error=> res.status(400).json({error:error.message}))
            }catch(error){
                res.status(400).json({error: error.message})
            }
        })
        
        //end point 07 DELETE POST
        api.delete('/posts/:postId', (req, res)=>{
            try{
                const { postId } = req.params
                const token = req.headers.authorization.slice(7)
                const data = jwt.verify(token, JWT_SECRET)
                const userId = data.sub
                
                deletePost(userId, postId)
                .then(()=> res.send())
                .catch(error=> res.status(400).json({error:error.message}))
            }catch(error){
                res.status(400).json({error: error.message})
            }
        })

        //end point 08 RETRIEVE POST siempre en plural
        api.get('/posts/:postId', (req, res) => {
            try {
                const { postId } = req.params

                const token = req.headers.authorization.slice(7)
                const data = jwt.verify(token, JWT_SECRET)
                const userId = data.sub

                retrievePost(userId, postId)
                    .then(post => res.json(post)) //singular
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

         //end point 09 RETRIEVE POSTS
         api.get('/posts', (req, res) =>{
            try{
                const token = req.headers.authorization.slice(7)
                const data = jwt.verify(token, JWT_SECRET)
                const userId = data.sub

                retrievePosts(userId)
                .then(posts=> res.json(posts))
                .catch(error=> res.status(400).json({error:error.message}))
            }catch(error){
                res.status(400).json({error: error.message})
            }
        })

        //estrella
        api.put('/posts/:postId/favs', (req, res) =>{
            try{
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const data = jwt.verify(token, JWT_SECRET)
                
                const userId = data.sub
                const postId = req.params.postId

                toggleFavPost(userId, postId)
                .then(()=> res.status(204).send())
                .catch(error=> res.status(400).json({error:error.message}))
            }catch(error){
                res.status(400).json({error: error.message})
            }
        })
                    //sólo en node
        api.listen(PORT, () => console.log(`API Funciona en el puerto ${process.env.PORT}`))
    })
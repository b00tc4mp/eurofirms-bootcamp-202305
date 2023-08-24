require('dotenv').config()//carga fichero .env en memoria y
// añade las variables de entorno a procces.env

const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
//logics
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const createTest = require('./logic/createTest')
const retrieveTeacherListTests = require('./logic/retrieveTeacherListTests')
const retrieveStudentListTests = require('./logic/retrieveStudentListTests')
const retrieveArrayStudentTests = require('./logic/retrieveArrayStudentTests')
const retrieveStudents = require('./logic/retrieveStudents')
const retrieveTest = require('./logic/retrieveTest')
const retrieveAnswers = require('./logic/retrieveAnswers')
const createAnswer = require('./logic/createAnswer')
const updateAnswerAssessment = require('./logic/updateAnswerAssessment')
const retrieveStudentAnswers = require('./logic/retrieveStudentAnswers')
//const {PORT, MONGODB_URL, JWT_SECRET} = process.env

mongoose.connect(`${process.env.MONGODB_URL}/abctest`)
    .then(() => {

        const api = express()

        const jsonBodyParser = bodyParser.json()

        api.use(cors())

        api.post('/users', jsonBodyParser, (req, res) => {
            const { name, password, email, role } = req.body

            try {
                registerUser(name, password, email, role)
                    .then(() => { res.status(201).send() })
                    .catch((error) => res.status(400).json({ error: error.message }))

            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })
        //--------------------
        api.post('/users/auth', jsonBodyParser, (req, res) => {
            const { email, password } = req.body //peticion por medio de insomia

            try {
                authenticateUser(email, password)
                    .then(user => {
                        //se crea un obj y se guarda el id
                        const data = { sub: user.id, role: user.role }
                        //creo el token y convierto el obj a json con sign
                        const token = jwt.sign(data, process.env.JWT_SECRET)

                        res.json(token)
                    })
                    .catch(error => {
                        res.status(400).json({ error: error.message })
                    })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })
        //----------------
        api.get('/users', (req, res) => {
            try {
                //retrieveUser
                const authorization = req.headers.authorization

                const token = authorization.slice(7)
                const data = jwt.verify(token, process.env.JWT_SECRET)
                const userId = data.sub

                retrieveUser(userId)
                    .then(user => {
                        res.json(user)
                    })
                    .catch(error => res.status(400).json({ error: error.message }))

            } catch (error) {
                res.status(400).json({ error: error.message })

            }
        })
        //---
        api.post('/tests', jsonBodyParser, (req, res) => {
            try {
                const authorization = req.headers.authorization
                const token = authorization.slice(7)
                const data = jwt.verify(token, process.env.JWT_SECRET)
                const userId = data.sub
                const { subject, title, description, attemps } = req.body

                createTest(subject, title, description, userId, attemps)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }

        })
        //--
        api.get('/tests', jsonBodyParser, (req, res) => {
            try {
                const authorization = req.headers.authorization
                const token = authorization.slice(7)
                const data = jwt.verify(token, process.env.JWT_SECRET)
                const userId = data.sub
               
                retrieveTeacherListTests(userId)
                    .then((tests) => res.json(tests))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })
        /*retrieveStudentListTests */
        api.get('/students/tests', jsonBodyParser, (req, res) => {
            try {
                const authorization = req.headers.authorization
                const token = authorization.slice(7)
                const data = jwt.verify(token, process.env.JWT_SECRET)
                const userId = data.sub
              
                retrieveStudentListTests(userId)
                    .then((answers) => res.json(answers))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })
        //retrieveArrayStudentTests
        api.get('/students/tests/array', jsonBodyParser, (req, res) => {
            try {
                const authorization = req.headers.authorization
                const token = authorization.slice(7)
                const data = jwt.verify(token, process.env.JWT_SECRET)
                const userId = data.sub
              
                retrieveArrayStudentTests(userId)
                    .then((answers) => res.json(answers))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })
        
        //----
        //-retrieveStudents
        api.get('/students/list/:testId', jsonBodyParser, (req, res) => {
            try {
                const authorization = req.headers.authorization
                const token = authorization.slice(7)
                const data = jwt.verify(token, process.env.JWT_SECRET)
                const userId = data.sub

                const testId = req.params.testId

                retrieveStudents(userId,testId)
                    .then(students => res.json(students))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })
        
        //retrieveTest
        api.get('/tests/:testId', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const data = jwt.verify(token,process.env.JWT_SECRET)
                const userId = data.sub
                const testId = req.params.testId

                retrieveTest(userId, testId)
                    .then(test => res.json(test))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })

            }
        })

        //retrieveAnswers
        api.get('/answers/:studentId/:testId', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const data = jwt.verify(token,process.env.JWT_SECRET)
                const userId = data.sub
                const studentId = req.params.studentId
                const testId = req.params.testId

                retrieveAnswers(userId, studentId,testId)
                    .then(test => res.json(test))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })

            }
        })

        //create answer 
        api.post('/answers/tests/:testId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const data = jwt.verify(token,process.env.JWT_SECRET)
                const userId = data.sub
                const testId = req.params.testId
                const {answer} = req.body

                createAnswer(userId,testId,answer)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })

            }
        })
        //updateAnswerAssessment
        api.put('/students/:studentId/tests/:testId/answers/:asnwerId',jsonBodyParser,(req,res)=>{
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const data = jwt.verify(token,process.env.JWT_SECRET)
                const userId = data.sub
                const studentId = req.params.studentId
                const asnwerId = req.params.asnwerId
                const testId = req.params.testId
                const {score,assessment} = req.body

                updateAnswerAssessment(userId,studentId,testId,asnwerId,score,assessment)
                    .then(() =>res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })

            }
        })
        //retrieveStudentAnswers
        api.get('/students/tests', (req,res)=>{
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const data = jwt.verify(token,process.env.JWT_SECRET)
                const userId = data.sub
                
                retrieveStudentAnswers(userId)
                    .then((tests) =>res.json(tests))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })

            }
        })

        api.listen(process.env.PORT, () => console.log(`API running in PORT ${process.env.PORT}`))
    })
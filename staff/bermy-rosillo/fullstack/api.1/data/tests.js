const mongodb = require('mongodb')

//const MongoClient = mongodb.MongoClient
const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

console.log('step 1', 'connect')
client.connect()
    .then(connection => {
        console.log('step 2', 'insert user')

        const db = connection.db('data')

        const users = db.collection('users')

        return users.insertOne({ name: 'Lyn X', email: 'lyn@x.com', password: '123123123' })
            .then(result => {
                console.log('step 3', 'see creation result')

                console.log(result)
            })
            .then(() => {
                console.log('step 4', 'retrieve all users')

                return users.find({}).toArray()
            })
            .then(allUsers => {
                console.log('step 5', 'show all users')

                console.table(allUsers)
            })
            .then(() => {
                console.log('step 6', 'retrieve a user')

                return users.findOne({ _id: new ObjectId("649da817ca082f91d970772e") })
            })
            .then(oneUser => {
                console.log('step 7', 'show one user')

                console.log(oneUser)
            })
            .then(()=>{
                console.log('Step 8','Modify one user')
                return users.updateOne({_id: new ObjectId("649da817ca082f91d970772e")},{$set: {name:'pinocho',email:'pin@ocho.com'}})
            })
            .then((result)=>{
                console.log('step 9','see update result')
                console.log(result)
            })
            .then(()=>{
                console.log('Step 10','Delete a user')
                return users.deleteOne({_id:new ObjectId("649edea0fb8ed99aa3178a12")})
            })
            .then(result=>{
                console.log('Step 11', 'Show delete user')
                console.log(result)
            })
    })
    .finally(() => {
        console.log('Step final ', 'Disconnect')
        return client.close()
    })

    console.log('connecting to mongodb')
const mongodb = require('mongodb')

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

console.log('step 1', 'connect')
client.connect()
    .then(connection => {
        console.log('step 2', 'insert user')

        const db = connection.db('data')

        const users = db.collection('users')

        return users.insertOne({ name: '', email:'' , password:'1234' })
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
    })
    .then(() => {
        console.log('step 6', 'retrieve a user')

        return users.findOne({ _id: new ObjectId("") })
    })
    .then(oneUser => {
        console.log('step 7', 'show one user')

        console.log(oneUser)
    })
    .then(() => {
        console.log('step 8', 'modify one user')

        return users.updateOne({ _id: new ObjectId(' ') }, { $set: { name: ' ', email: ' ' } })
    })
    .then(result => {
        console.log('step 9', 'see update result')

        console.log(result)
    })
    .then(() => {
        console.log('step 10', 'delete a user')

        return users.deleteOne({ _id: new ObjectId(' ') })
    })
    .then(result => {
        console.log('step 11', 'see deletion result')

        console.log(result)
    })
    .finally(() => {
        console.log('step final', 'Disconnect')

        return client.close()
    })
console.log('connecting to mongodb')

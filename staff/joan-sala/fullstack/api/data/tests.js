const mongodb = require('mongodb')

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')
console.log('- Step 01:', 'Connect')

client.connect()
    .then(connection => {
        console.log('- Step 02:', 'Insert user')

        const db = connection.db('data')

        const users = db.collection('users')

        return users.insertOne({
            name: 'Pe Pe',
            email: 'pe@pe.com',
            password: '123'
        })
        .then(result => {
            console.log('- Step 03.', 'See creaion result')
            console.log(result)
        })
        .then(() => {
            console.log('- Step 04.', 'Rretrieve all users')
            return users.find().toArray()
        })
        .then((allUsers) => {
            console.log('- Step 05.', 'Show all users')
            console.table(allUsers)
        })
        .then(() => {
            console.log('- Step 06.', 'Retrieve a user')
            return users.findOne({ _id: new ObjectId('64a0675ab36b8638382d5723') })
        })
        .then(oneUser => {
            console.log('- Step 07.', 'Show one user')

            console.log(oneUser)
        })
        .then(() => {
            console.log('- Step 08.', 'Modify one user')
            return users.updateOne(
                { _id: new ObjectId('64a067ed0dfebd44abcf4c70') },
                { $set: { name: 'Grau Lio', email: 'grau@lio.com' } }
            )
        })
        .then(result => {
            console.log('- Step 09:', 'See update result')
            console.log(result)
        })
        .then(() => {
            console.log('- Step 10:', 'Delete a user')
            return users.deleteOne({ _id: '64a067ed0dfebd44abcf4c70' })
        })
        .then(result => {
            console.log('- Setep 11', 'See deletion result')
            console.log(result)
        })
        .finally(() => {
            console.log('- Step finally', 'Disconnect')
            return client.close
        })

    })




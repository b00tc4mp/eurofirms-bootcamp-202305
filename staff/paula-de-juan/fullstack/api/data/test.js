const mongodb = requiere('mongodb')

const { MongoClient, ObjectId} = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

console.log('step 1', 'connect')
client.connect()
    .then(connection => {
        console.log('step 2', 'insert user')

        const db = connection.db('data')

        const users = db.collection('users')

        return users.insertOne({ name: 'Ringo Starr', email: 'ringo@beatle.com', password: '123123'})
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
    .finally(() => {
        console.log('step final', 'disconnect')

        return client.close()
    })

console.log('connecting to mongodb')
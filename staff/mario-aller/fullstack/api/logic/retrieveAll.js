function retrieveAll(collection) {
    return collection.find().toArray()
        .catch(err => console.error(err))
}
module.exports = retrieveAll
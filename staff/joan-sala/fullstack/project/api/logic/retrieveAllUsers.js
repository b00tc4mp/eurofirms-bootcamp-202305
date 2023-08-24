/**
 * The function retrieves all users from a given collection.
 * @param collection - The `collection` parameter is the MongoDB collection object that you want to
 * retrieve all users from.
 * @returns a promise that resolves to an array of all the users in the given collection.
 */
function retrieveAllUsers(collection){
    return collection.find().toArray()
        .catch(error =>{
            console.log(error)
        })
}
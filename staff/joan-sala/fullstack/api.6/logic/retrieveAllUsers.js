function retrieveAllUsers(collection){
    return collection.find().toArray()
        .catch(error =>{
            console.log(error)
        })
}
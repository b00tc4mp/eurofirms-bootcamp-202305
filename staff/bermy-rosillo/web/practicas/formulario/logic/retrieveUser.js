function retrieveUser(userId){
    const users = db.users

    let user = users.find(user=>user.id === userId)
    
    if(user === undefined)
        return null

    //crea un nuevo obj a partir del usuario encontrado,se le asigna solo lo que quiero mostrar
    user = {
        email:user.email,
        name:user.name
    }
    return user
}
function retrieveUser(userId) {
    const users = db.users

    let user = users.find(user => user.id === userId)

    if(user === undefined)
        return null
   
    user = {
        name: user.name,
        email: user.email
    }
    return user
}
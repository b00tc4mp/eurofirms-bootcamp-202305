function registerUser(name, email, password) {
    let user

    const users = db.users

    for (let i = 0; i < users.length; i++) {
        const _user = users[i]

        if (_user.email === email) {
            user = _user

            break
        }
    }

    if (user !== undefined)
        return false

    const id = ++db.userIdCount
    
    user = new User(id, name, email, password)
    users.push(user)

    return true
}
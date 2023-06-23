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

    user = new User(name, email, password)

    users.push(user)

    db.users = users

    return true
}
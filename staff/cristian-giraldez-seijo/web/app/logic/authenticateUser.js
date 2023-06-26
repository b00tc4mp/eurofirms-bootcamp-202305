function authenticateUser(email, password) {
    let user
const users = db.users

    for (let i = 0; i < users.length; i++) {
        const _user = users[i]

        if (_user.email === email) {
            user = _user

            break
        }
    }

    if (user === undefined)
        return false
    else if (user.password !== password)
        return false
    else
        return user.id
}
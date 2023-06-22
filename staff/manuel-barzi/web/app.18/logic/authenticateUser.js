function authenticateUser(email, password) {
    let user

    for (let i = 0; i < users.length; i++) {
        const _user = users[i]

        if (_user.email === email) {
            user = _user

            break
        }
    }

    if (user === undefined || user.password !== password)
        return false

    return user.id
}
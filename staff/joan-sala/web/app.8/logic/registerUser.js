function registerUser(author, email, password) {
    let user

    for (let i = 0; i < users.length; i++) {
        const _user = users[i]

        if (_user.email === email) {
            user = _user

            break
        }
    }

    if (user !== undefined)
        return false
    else {
        user = new User(author, email, password)
        users.push(user)

        return true
    }
}
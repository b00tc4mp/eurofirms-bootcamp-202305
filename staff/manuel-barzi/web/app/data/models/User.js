function User(name, email, password) {
    this.id = ++User.count
    this.name = name
    this.email = email
    this.password = password
}

{
    User.count = 0

    const users = db.users

    if (users.length) {
        const last = users[users.length - 1]

        User.count = last.id
    }
}

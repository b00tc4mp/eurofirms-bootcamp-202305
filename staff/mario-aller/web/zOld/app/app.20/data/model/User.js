function User(name, email, password) {
    let counter = db.userIdCounter
    this.id = ++counter
    this.name = name
    this.email = email
    this.password = password
    db.userIdCounter = counter
}

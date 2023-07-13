function registerUser(users, name, email, password) {
    return users.insertOne({ name, email, password})
}

module.exports = registerUser
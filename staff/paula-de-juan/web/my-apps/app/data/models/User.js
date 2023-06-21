function User(name, email, password){
    this.id = ++User.count
    this.name = name
    this.email = email
    this.password = password
}

User.count = -1;
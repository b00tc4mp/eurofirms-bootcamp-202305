function User (name, email, password){
    this.id = User.idCounter++
    this.name = name
    this.email = email
    this.password = password
}

User.idCounter = 1;
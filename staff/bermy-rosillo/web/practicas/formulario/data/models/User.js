function User(name,email,password){
    this.id=++User.count
    this.name= name
    this.email=email
    this.password=password
}

User.count=0

{
    const users =db.users
    const longitud= users.length
    
    if(longitud){
        const lastUser = users[users.length-1]
    
        User.count = lastUser
    }
}



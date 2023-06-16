var users = []

function User(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
}

// User.prototype = new Object()
// User.prototype.constructor = User

function SuperUser(name, email, password) {
    User.call(this, name, email, password)
}

//SuperUser.prototype = new User()
SuperUser.prototype = Object.create(User.prototype)
SuperUser.prototype.constructor = SuperUser

//var user = new Object()
//user.name = 'Pepito Grillo'
//...
var user = { name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123' }
users.push(user)

var user = new User('Peter Pan', 'peter@pan.com', '123123123')
users.push(user)

var user = new User('Wendy Darling', 'wendy@darling.com', '123123123')
users.push(user)

var user = new SuperUser('Mara Dona', 'mara@dona.com', '123123123')
users.push(user)

users.forEach(user => {
    console.log(user instanceof User ? 'User? yes' : 'User? no')
})

users.forEach(user => {
    console.log(user instanceof SuperUser ? 'SuperUser? yes' : 'SuperUser? no')
})

// VM6580:35 User? no
// VM6580:35 User? yes
// VM6580:35 User? yes
// VM6580:35 User? yes
// VM6580:39 SuperUser? no
// VM6580:39 SuperUser? no
// VM6580:39 SuperUser? no
// VM6580:39 SuperUser? yes
// undefined
var users = []

function User(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
}


// var user = {} // new Object()
// user.name = 'Peter Pan'
// user.email = 'peter@pan.com'
// user.password = '123123123'

// var user = { name: 'Peter Pan', email: 'peter@pan.com', password: '123123123' }


var user = new User('Peter Pan', 'peter@pan.com', '123123123')
users.push(user)

var user = new User('Wendy Darling', 'wendy@darling.com', '123123123')
users.push(user)

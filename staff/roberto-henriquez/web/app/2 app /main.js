//data
var users = []
users.count = 0


users.push({ name: 'Pin Ocho', email: 'pin@ocho.com', password: '1234' })
users.push({ name: 'John Doe', email: 'john@doe.com', password: '1234' })
users.push({ name: 'Ada Love', email: 'ada@love.com', password: '1234' })


var posts = []
posts.count = 0

users.push({
    id: ++users.count,
    name: 'Pin Ocho',
    email: 'pin@ocho.com',
    password: '1234'
})

users.push({
    id: ++users.count,
    name: 'John Doe',
    email: 'john@doe.com',
    password: '1234'
})

users.push({
    id: ++users.count,
    name: 'Ada Love',
    email: 'ada@love.com',
    password: '1234'
})

const posts = []
posts.count = 0
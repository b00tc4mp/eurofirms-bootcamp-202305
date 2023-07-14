/*

    --* Database *--

*/
var users = []
users.count = 0

users.push({ id: ++users.count , name: 'John Doe', email: 'john@doe.com', password: '123123123' })
users.push({ id: ++users.count , name: 'Ada Love', email: 'ada@love.com', password: '123123123' })

var posts = []
posts.count = 0

posts.push({id: ++posts.count , image: 'https://cdn.mos.cms.futurecdn.net/HsDtpFEHbDpae6wBuW5wQo.jpg', text: 'black hole', user: users[0].id })
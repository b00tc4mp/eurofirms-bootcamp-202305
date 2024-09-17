/**
 * DATA
 */

var users = []
users.count = 0
users.push({id:++users.count, name: 'Cruela Devil', email: 'cruela@devil.com', password:'1234'})
users.push({id:++users.count, name: 'Miercoles Adams', email: 'miercoles@adams.com', password: '1234'})
users.push({id:++users.count, name: 'Harley Queen', email: 'harley@queen.com', password: '1234'})

var posts = []
posts.count = 0
posts.push({id:++posts.count, image: '#', text: 'texto', user: 1})
posts.push({id:++posts.count, image: '#', text: 'texto', user: 2})
posts.push({id:++posts.count, image: '#', text: 'texto', user: 3})
//poner imagenes y textos
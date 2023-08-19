// Declaraciones globales
const users = []
users.idCounter = 0

// Populate users
users.push({ id: ++users.idCounter, name: 'Frodo Bolson', email: 'frodo@bolson-cerrado.com', password: 'mitril' })
users.push({ id: ++users.idCounter, name: 'Bilbo Bolson', email: 'bilbo@bolson-cerrado.com', password: 'dardo' })
users.push({ id: ++users.idCounter, name: 'Meriadoc Brandigamo', email: 'merry@comarca.com', password: 'rohan' })
users.push({ id: ++users.idCounter, name: 'Peregrin Tuk', email: 'pippin@comarca.com', password: 'gondor' })

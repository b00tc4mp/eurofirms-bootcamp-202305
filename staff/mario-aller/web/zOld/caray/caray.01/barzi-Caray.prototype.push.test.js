describe('TEST push')

describe('CASE push King Kong to people')

const people = new Caray({ name: 'Pepito Grillo' }, { name: 'Wendy Darling' }, { name: 'Peter Pan' }, { name: 'James Hook' }, { name: 'Campa Nilla' })

const newLength = people.push({ name: 'King Kong' })

console.log(newLength)
// 6

console.log(people[people.length - 1])
// { King Kong }
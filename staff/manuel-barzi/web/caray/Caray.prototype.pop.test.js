describe('TEST pop')

describe('CASE extract Campa Nilla from people')

const people = new Caray({ name: 'Pepito Grillo' }, { name: 'Wendy Darling' }, { name: 'Peter Pan' }, { name: 'James Hook' }, { name: 'Campa Nilla' })

const person = people.pop()

console.log(people.length)
// 4
console.log(person)
// { Campa Nilla }

const person2 = people.pop()

console.log(people.length)
// 3
console.log(person2)
// { James Hook }
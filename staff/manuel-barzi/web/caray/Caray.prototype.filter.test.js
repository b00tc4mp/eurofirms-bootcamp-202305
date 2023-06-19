describe('TEST filter')

describe('CASE with people')

const people = new Caray(
    {
        name: 'Pepito Grillo',
        age: 30,
        origin: 'Wonderland',
        colors: ['red', 'blue', 'yellow']
    },
    {
        name: 'Wendy Darling',
        age: 16,
        origin: 'Wonderland',
        colors: ['pink', 'skyblue']
    },
    {
        name: 'Peter Pan',
        age: 18,
        origin: 'Wonderland',
        colors: ['green', 'blue']
    },
    {
        name: 'James Hook',
        age: 40,
        origin: 'Wonderland',
        colors: ['red', 'black']
    }
)

const person = people.filter(person => person.age < 10)

console.log(person)
// Caray { length: 0 }

const person2 = people.filter(person => person.name.includes('J'))

console.log(person2)
// Caray { 0: { James Hook }, length: 1 }

const person3 = people.filter(person => person.colors.includes('blue'))

console.log(person3)
// Caray { 0: { Pepito Grillo }, 1: { Peter Pan }, length: 2 }

const person4 = people.filter(person => person.colors.includes('black'))

console.log(person4)
// Caray { 0: { James Hook }, length: 1 }

const person5 = people.filter(person => person.origin === 'Wonderland')

console.log(person5)
// Caray { 0 : { Pepito Grillo }, ..., 3: { James Hook }, length: 4 }
describe('TEST find')

describe('CASE with people')

const people = [
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
]

const person = find(people, person => person.age < 10)

console.log(person)
// undefined

const person2 = find(people, person => person.name.includes('J'))

console.log(person2)
// { James Hook }

const person3 = find(people, person => person.colors.includes('blue'))

console.log(person3)
// { Pepito Grillo }

const person4 = find(people, person => person.colors.includes('black'))

console.log(person4)
// { James Hook }
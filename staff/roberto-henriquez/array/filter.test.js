describe('TEST filter')

describe('CASE with people')

const people = [{
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

const person = filter(people, person => person.age < 10)
console.log(person)
    // []

const person2 = filter(people, person => person.name.includes("J"))

console.log(person2)
    //[{James Hook}]   

const person3 = filter(people, person => person.colors.includes('blue'))

//[{Pepito Grillo},{Peter Pan}]

const person4 = filter(people, person => person.colors.includes('black'))

console.log(person4)
    // [{ James Hook }]

const person5 = filter(people, person => person.origin === 'Wonderland')

console.log(person5)

// [{Pepito Grillo}, ...{James HooK}]
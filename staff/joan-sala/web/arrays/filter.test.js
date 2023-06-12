describe('TEST fiter')

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

const person = filter(people, person => person.age < 18)
//[]

const person2 = filter(people, person => person.name.includes('J'))
console.log(person2) //{James Hood}

const person3 = filter(people, person => person.color.includes('blue'))
console.log(person3) //{Pepito Grillo}

const person4 = filter(people, person => person.color.includes('black'))
console.log(person4) 
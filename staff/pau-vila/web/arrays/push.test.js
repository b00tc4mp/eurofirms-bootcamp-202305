describe('TEST push')

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

const length = push(people, {
    name: 'Campa Nilla',
    age: 18,
    origin: 'Wonderland',
    colors: ['yellow', 'green']
})

console.log(length)
// 5

console.log(people)
// [ {...}, ..., { Campa Nilla } ]

const length2 = push(people, {
    name: 'Robin Hood',
    age: 30,
    origin: 'Sherwood Forest',
    colors: ['green']
}, {
    name: 'Ceni Cienta',
    age: 25,
    origin: 'Wonderland',
    colors: ['white', 'blue']
}, {
    name: 'Sh Rek',
    age: 40,
    origin: 'Wonderland',
    colors: ['green']
})

console.log(length2)
// 8

console.log(people)
// [{...}, ..., { Robin Hood }, { Ceni Cienta }, { Sh Rek }]

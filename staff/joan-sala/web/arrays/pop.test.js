describe('TEST POP')

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
const resultPop = pop(people)

console.log(resultPop)

console.log(people)

describe('CASE empty array')

const emptyArray = []

const resultPop2 = pop(emptyArray)

console.log(resultPop2)

console.log(emptyArray)
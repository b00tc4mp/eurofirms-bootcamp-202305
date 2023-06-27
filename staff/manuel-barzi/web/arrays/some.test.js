describe('TEST some')

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

const result = some(people, function (person) {
    // if (person.age === 18)
    //     return true
    // else
    //     return false

    return person.age === 18
})

console.log(result) // true

const result2 = some(people, function (person) {
    // if (person.name === 'James Hook')
    //     return true
    // else
    //     return false

    return person.name === 'James Hook'
})

console.log(result2) // true

const result3 = some(people, function (person) {
    return person.name === 'King Kong'
})

console.log(result3) // false

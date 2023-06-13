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
const peopleNames = map(people, person => person.name.toUpperCase())

console.info(peopleNames)
//vm1518:30 (4) | 'PEPITO GRILLO', 'WENDY DARLING' | 'PETER PAN', 'JAMES HOOK']        
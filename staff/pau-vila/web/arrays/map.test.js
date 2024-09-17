describe('test map')

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

const peopleNames =map(people, person => person.name.toUpperCase()) 

console.info(peopleNames)
//(4) [PEPITO GRILLO, WENDY DARLING, PETER PAN, JAMES HOOK]

const peopleInfo = map(people, person => person.name + ' (' + person.age +') ')

console.log(peopleInfo)
// Pepito Grillo (30)..., .... todos
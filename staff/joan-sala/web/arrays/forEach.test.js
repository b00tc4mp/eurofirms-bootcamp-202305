describe('TEST forEach')

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

forEach(people, function (person) {
    console.log(person.name, person.age)
})

forEach(people, function (person) {
    console.log(person.name, person.origin)
})

forEach(people, function (person) {
    console.log(person.name, person.colors)
})

describe('CASE with barbies')

const barbies = [
    {
        name: 'Beachy',
        hair: 'blonde',
        eyes: 'blue',
        dress: 'bikini'
    },
    {
        name: 'Mermaid',
        hair: 'red',
        eyes: 'green',
        dress: 'scales'
    },
    {
        name: 'Veterinary',
        hair: 'blonde',
        eyes: 'lila',
        dress: 'dress'
    },
    {
        name: 'Disco',
        hair: 'brown',
        eyes: 'gray',
        dress: 'jumpsuit'
    },
    {
        name: 'Margot',
        hair: 'blonde',
        eyes: 'blue',
        dress: 'dress'
    }
]

forEach(barbies, function (barbie) { console.log(barbie.name, barbie.hair) })

forEach(barbies, function (barbie) { console.log(barbie.name, barbie.eyes) })

forEach(barbies, function (barbie) { console.log(barbie.name, barbie.dress) })
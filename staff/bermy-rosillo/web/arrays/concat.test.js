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
//--------------------------------
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
const arrayConcat = concat(barbies,people)
console.info(arrayConcat)
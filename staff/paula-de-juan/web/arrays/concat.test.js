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

const people2 = concat(people, {
    name: 'Campa Nilla',
    age: 18,
    origin: 'Wonderland',
    colors: ['yellow', 'green']
},
{
    name: 'Rodolfo',
    age: 15,
    origin: 'North Pole',
    colors: ['brown', 'red']
}
)


console.log(people2)




const people3 = concat(people, [50, 70], ['Hola', 'Mundo'])

console.log(people3)
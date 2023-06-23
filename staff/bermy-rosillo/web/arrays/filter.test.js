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
        origin: 'Wonderlandssss',
        colors: ['pink', 'skyblue']
    },
    {
        name: 'Peter Pan',
        age: 18,
        origin: 'Wonderlandsssss',
        colors: ['green', 'blue']
    },
    {
        name: 'James Hook',
        /*age: 40,*/
        origin: 'Wonderland',
        colors: ['red', 'black']
    },
    {
        name: 'Bermy',
        age:34,
        origin: 'my house',
        colors: ['blue', 'brown']
    }
]
const result= filter(people,element=>element.colors.includes('blue'))
console.log(result)
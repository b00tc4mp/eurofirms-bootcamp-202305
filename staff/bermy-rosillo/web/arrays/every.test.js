/*describe('TEST every')

describe('CASE with people')*/

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
const result = every(people,function(element){

    return element.origin === 'Wonderland'
    
})
console.log(result)

const result2 = every(people,function(element){

    return element.age
    
})
console.log(result2)


describe(' TEST forEach ')

describe (' CASE with people ')

const people2 = new Caray(
    {
        name: 'Pepito Grillo',
        age: 30,
        origin: 'Wonderland',
        colors: ['red', 'blue', 'yellow'],
        live: true
    },
    {
        name: 'Wendy Darling',
        age: 16,
        origin: 'Wonderland',
        color: ['pink', 'skyblue'],
        live: true
    },
    {
        name: 'Peter Pan',
        age: 18,
        origin: 'Wonderland',
        color: ['green', 'blue'],
        live: true
    },
    {
        name: 'James Hook',
        age: 40,
        origin: 'Wonderland',
        color: ['red', 'black'],
        live: true
    }
)

people3.forEach(function(person){
    console.log(person.name, person.age)
})

people3.forEach(function(person){
    console.log(person.name, person.origin)
})

people3.forEach(function(person){
    console.log(person.name, person.colors)
})
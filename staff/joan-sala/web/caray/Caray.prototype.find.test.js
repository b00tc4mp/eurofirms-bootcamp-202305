describe(' TEST find ')

describe(' CASE find Peter Pan in people ')

{
    const people = new Caray(
        { name: 'Pepito Grillo' },
        { name: 'Wendy Darling' },
        { name: 'Peter Pan' },
        { name: 'James Hook' },
        { name: 'Campa Nilla' }
    )

    const person = people.find(person => person.name === 'Peter Pan')

    console.log(person)
    // { Peter Pan }
}

describe(' CASE does not find Petra Pan in people ')

{
    const people = new Caray(
        { name: 'Pepito Grillo' },
        { name: 'Wendy Darling' },
        { name: 'Peter Pan' },
        { name: 'James Hook' }, 
        { name: 'Campa Nilla' }
    )

    const person = people.find(person => person.name === 'Petra Pan')

    console.log(person)
    // undefined
}
describe('Test Find')

describe('CASE with musicians')

const musicians = [
    {
        name: 'Kurt Cobain',
        age: 27,
        origin: 'Seattle',
        group: 'Nirvana',
        songs: ['Come as you are', 'Smells like teen Spirit']
    },
    {
        name: 'Jim Morrison',
        age: 27,
        origin: 'Florida',
        group: 'The Doors',
        songs: ['People are strange', 'Light my fire']
    },
    {
        name: 'Jimi Hendrix',
        age: 27,
        origin: 'Seattle',
        group: 'The Jimi Hendrix Experience',
        songs: ['Purple Haze', 'Hey Joe']
    }
]

const musician = find(musicians, musician => musician.age == 27  )

console.log(musician)

const musician2 = find(musicians, musician => musician.name.includes('J'))

console.log(musician2)
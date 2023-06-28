describe('TEST Slice')

describe('CASE with musicians')

const people = [
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
    },
    {
        name: 'Amy Winehouse',
        age: 27,
        origin: 'Londres',
        group: 'Amy Winehouse',
        songs: ['Back to black', 'Some unholy war']
    }
]

const result = slice(people,1)

console.log(result)
console.log(people)

const result2 = slice(people,1,3)

console.log(result2)
console.log(people)
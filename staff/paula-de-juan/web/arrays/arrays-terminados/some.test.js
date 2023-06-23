describe('Test Some')

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

// Expected output: true
const result = some(musicians, function (musician){
    return musician.group === 'The Doors'
})

console.log(result)

// Expected output: true
const resultAge = some(musicians, function (musician){
    return musician.age === 27  
})

console.log(resultAge)

// Expected output: false
const result2 = some(musicians, function (musician){
    return musician.name === 'Janis Joplin'
})

console.log(result2)
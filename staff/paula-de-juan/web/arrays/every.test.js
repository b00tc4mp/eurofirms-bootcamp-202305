describe('TEST every')

describe('CASE with musicians')

const musicians = [
    {
        name: 'Kurt Cobain',
        age: 25,
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
        age: 26,
        origin: 'Seattle',
        group: 'The Jimi Hendrix Experience',
        songs: ['Purple Haze', 'Hey Joe']
    }
]

// Expected output: true
const result = every(musicians, function(element){
    return element.age <= 27  
})

console.log(result)


// Expected output: false
const result2 = every(musicians, function(element){
    return element.origin === 'Seattle'
})

console.log(result2)


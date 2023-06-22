describe('Test forEach')

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

forEach(musicians, function (musician){
    console.log(musician.name, musician.age, musician.origin)
})

forEach(musicians, function (musician){
    console.log(musician.name, musician.group)
})

forEach(musicians, function (musician){
    console.log(musician.name, musician.songs)
})
describe('Test FILTER')

describe('CASE with musicians')

const musicians = [
    {
        name: 'Kurt Cobain',
        age: 25,
        origin: 'Seattle',
        group: 'Nirvana',
        songs: ['Come as you are', 'Smells like teen Spirit', 'Heart-shaped box']
    },
    {
        name: 'Jim Morrison',
        age: 28,
        origin: 'Florida',
        group: 'The Doors',
        songs: ['People are strange', 'Light my fire', 'Love me two times']
    },
    {
        name: 'Jimi Hendrix',
        age: 29,
        origin: 'Seattle',
        group: 'The Jimi Hendrix Experience',
        songs: ['Purple Haze', 'Hey Joe']
    }
]

const result1 = musicians.filter(function (musician){
    return musician.age > 18
})

console.log(result1)

const result2= musicians.filter(function (musician){
    return musician.group.length < 8
})

console.log(result2)

const result3 = musicians.filter(function (musician){
    return musician.songs.length > 2
})

console.log(result3)

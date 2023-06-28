describe('Test Map')

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

const musicianName = map(musicians, musician => musician.name.toUpperCase())

console.log(musicianName)


const musicianInfo = map(musicians, musician => 
    musician.name + ' : ' + musician.songs )

console.log(musicianInfo)
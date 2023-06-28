// Made by Paula de Juan Segura

describe('Test PUSH')

describe('CASE with musicians')

const beatles = [
    {
        name: 'Paul',
        surname: 'McCartney',
        songs: ['Hey Jude', 'Eleanor Rigby']
    },
    {
        name: 'Ringo',
        surname: 'Starr',
        songs: ['Yellow Submarine']
    },
    {
        name: 'George',
        surname: 'Harrison',
        songs: ['While my guitar gently weeps']
    }
]

const count = push(beatles, {
    name: 'John',
    surname: 'Lennon',
    songs: ['Come together', 'Helter Skelter']
})

console.log(count)

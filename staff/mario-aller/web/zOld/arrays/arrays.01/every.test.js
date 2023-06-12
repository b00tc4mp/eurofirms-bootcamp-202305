const barbies = [
    {
        name: 'Beachy',
        hair: 'blonde',
        eyes: 'blue',
        dress: 'dress'
    },
    {
        name: 'Mermaid',
        hair: 'red',
        eyes: 'green',
        dress: 'dress'
    },
    {
        name: 'Veterinary',
        hair: 'blonde',
        eyes: 'lila',
        dress: 'dress'
    },
    {
        name: 'Disco',
        hair: 'brown',
        eyes: 'gray',
        dress: 'dress'
    },
    {
        name: 'Margot',
        hair: 'blonde',
        eyes: 'blue',
        dress: 'dress'
    }
]

const result1 = every(barbies, function (barbie) { return barbie.dress === 'dress'})
console.log(result1)
const result2 = every(barbies, function (barbie) { return barbie.hair === 'blonde'})
console.log(result2)
const result3 = every(barbies, function (barbie) { return barbie.eyes === 'blue'})
console.log(result3)
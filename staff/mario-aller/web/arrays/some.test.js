const barbies = [
    {
        name: 'Beachy',
        hair: 'blonde',
        eyes: 'blue',
        dress: 'bikini'
    },
    {
        name: 'Mermaid',
        hair: 'red',
        eyes: 'green',
        dress: 'scales'
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
        dress: 'jumpsuit'
    },
    {
        name: 'Margot',
        hair: 'blonde',
        eyes: 'blue',
        dress: 'dress'
    }
]

const result1=some(barbies, function (barbie) { return barbie.hair === 'blonde'})
console.log(result1)

const result2=some(barbies, function (barbie) { return barbie.eyes === 'gray'})
console.log(result2)

const result3=some(barbies, function (barbie) { return barbie.name === 'Griselda'})
console.log(result3)

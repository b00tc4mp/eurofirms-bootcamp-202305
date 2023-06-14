const barbies = [
    {
        name: 'Beachy',
        hair: 'blonde',
        eyes: 'blue',
        dress: 'bikini',
        vehicle:'mustang'
    },
    {
        name: 'Mermaid',
        hair: 'red',
        eyes: 'green',
        dress: 'scales',
        vehicle:'truck'
    },
    {
        name: 'Veterinary',
        hair: 'blonde',
        eyes: 'lila',
        dress: 'dress',
        vehicle:'mustang'
    }
]
const result = some(barbies,function(doll){
    return doll.hair === 'blonde'    
})
console.log(result)

/*const result2 = some(barbies,function(doll){
    return doll.eyes ='green'
})
console.log(result2)

const result3 = some(barbies,function(doll){
    return doll.vehicle ='mustang'
})
console.log(result3)*/
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
const caray = new Caray(10,20,30,40)
console.log(caray)
caray.talk()

const result = caray.some(barbies,function(element){
    return element.hair ==='blonde'
})
console.log(result)
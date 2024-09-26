const barbies = new Caray(
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
);   

const result = every(barbies,function(element){
    return console.log (element.vehicle === 'mustang')
})
console.log(result)
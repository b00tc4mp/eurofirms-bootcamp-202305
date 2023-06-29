function salute(to) {
    console.log(this.name + ': Hello, ' + to + '!')
}

var peter = {
    name: 'Peter',

    salute: salute
}

peter.salute('Wendy')

var saluteBindedToPeter = salute.bind(peter)
saluteBindedToPeter('Wendy')
// VM2617:2 Peter: Hello, Wendy!
// VM2617:2 Peter: Hello, Wendy!

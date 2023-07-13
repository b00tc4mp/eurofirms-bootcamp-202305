function salute(to) {
    console.log(this.name + ': Hello, ' + to + '!')
}

var peter = {
    name: 'Peter',

    salute: salute
}

peter.salute('Wendy')

salute.bind(peter)('Wendy')
// VM2613: 2 Peter: Hello, Wendy!
// VM2613: 2 Peter: Hello, Wendy!
// undefined
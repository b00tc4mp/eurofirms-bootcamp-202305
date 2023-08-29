function salute (to) {
    console.log(this.name + ': Hello, ' + to + '!')
}

var peter = {
    name: 'Peter',

    salute
}

peter.salute('Wendy')
// VM2514: 2 Peter: Hello, Wendy!
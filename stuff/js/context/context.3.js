function salute(to) {
    console.log(this.name + ': Hello, ' + to + '!')
}

var peter = {
    name: 'Peter',

    salute: salute
}

peter.salute('Wendy')

salute('Wendy')
// VM2609:2 Peter: Hello, Wendy!
// VM2609:2 : Hello, Wendy!
// undefined
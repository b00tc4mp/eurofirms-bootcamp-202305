function salute(to) {
    console.log(this.name + ': Hello, ' + to + '!')
}

var peter = {
    name: 'Peter',

    salute: salute
}

peter.salute('Wendy')

salute.call(peter, 'Wendy')
// VM2719:2 Peter: Hello, Wendy!
// VM2719:2 Peter: Hello, Wendy!
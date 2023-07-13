var peter = {
    name: 'Peter',

    salute(to) {
        console.log(this.name + ': Hello, ' + to + '!')
    }
}

peter.salute('Wendy')
// VM2480: 5 Peter: Hello, Wendy!
// undefined
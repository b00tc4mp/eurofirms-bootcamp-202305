function salute(to) {
    console.log(this.name + ': Hello, ' + to + '!')
}

var peter = {
    name: 'Peter',

    salute: salute
}

peter.salute('Wendy')

//var saluteBindedToPeter = salute.bind(peter)

function bind(func, ctx) {
    return function (to) {
        func.call(ctx, to)
    }
}

var saluteBindedToPeter = bind(salute, peter)
saluteBindedToPeter('Wendy')
// VM2649: 2 Peter: Hello, Wendy!
// VM2649: 2 Peter: Hello, Wendy!
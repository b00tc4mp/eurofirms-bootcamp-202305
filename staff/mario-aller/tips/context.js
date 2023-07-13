var peter = {
    name: 'Peter',

    salute(to) {
        console.log(this.name + ': Hello, ' + to + '!')
    }
}

peter.salute('Wendy')
// VM2480: 5 Peter: Hello, Wendy!
// undefined

//---------------------------------------

function salute(to) {
    console.log(this.name + ': Hello, ' + to + '!')
}

var peter = {
    name: 'Peter',

    salute
}

peter.salute('Wendy')
// VM2514: 2 Peter: Hello, Wendy!

//---------------------------------------

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

//---------------------------------------

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

//---------------------------------------

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

//---------------------------------------

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

//---------------------------------------

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

//---------------------------------------

function salute(to) {
    console.log(this.name + ': Hello, ' + to + '!')
}

function add(a, b) {
    return this.name + ': ' + (a + b)
}

var peter = {
    name: 'Peter',

    salute: salute,

    add: add
}

console.log(peter.add(1, 2))
console.log(add(1, 2))
// VM2835:17 Peter: 3
// VM2835:18 : 3

//---------------------------------------

function salute(to) {
    console.log(this.name + ': Hello, ' + to + '!')
}

function add(a, b) {
    return this.name + ': ' + (a + b)
}

var peter = {
    name: 'Peter',

    salute: salute,

    add: add
}

console.log(peter.add(1, 2))
console.log(add.call(peter, 1, 2))
// VM2854:17 Peter: 3
// VM2854:18 Peter: 3

//---------------------------------------

function salute(to) {
    console.log(this.name + ': Hello, ' + to + '!')
}

function add(a, b) {
    return this.name + ': ' + (a + b)
}

var peter = {
    name: 'Peter',

    salute: salute,

    add: add
}

var addBindedToPeter = add.bind(peter)

console.log(peter.add(1, 2))
console.log(addBindedToPeter(1, 2))
// VM2875:19 Peter: 3
// VM2875:20 Peter: 3

//---------------------------------------

function salute(to) {
    console.log(this.name + ': Hello, ' + to + '!')
}

function add(a, b) {
    return this.name + ': ' + (a + b)
}

var peter = {
    name: 'Peter',

    salute: salute,

    add: add
}

//var addBindedToPeter = add.bind(peter)

function bind(func, ctx) {
    return function (...args) { // rest operator
        return func.call(ctx, ...args) // spread operator
    }
}

var addBindedToPeter = bind(add, peter)

console.log(peter.add(1, 2))
console.log(addBindedToPeter(1, 2))
// VM2911: 27 Peter: 3
// VM2911: 28 Peter: 3

//---------------------------------------

function salute(to) {
    console.log(this.name + ': Hello, ' + to + '!')
}

function add(a, b) {
    return this.name + ': ' + (a + b)
}

var peter = {
    name: 'Peter',

    salute: salute,

    add: add
}

//var addBindedToPeter = add.bind(peter)

function bind(func, ctx) {
    return function (...args) { // rest operator
        return func.apply(ctx, args)
    }
}

var addBindedToPeter = bind(add, peter)

console.log(peter.add(1, 2))
console.log(addBindedToPeter(1, 2))
// VM2927:27 Peter: 3
// VM2927:28 Peter: 3
// undefined

//---------------------------------------

function salute(to) {
    console.log(this.name + ': Hello, ' + to + '!')
}

function add(a, b) {
    return this.name + ': ' + (a + b)
}

var peter = {
    name: 'Peter',

    salute: salute,

    add: add
}

//var addBindedToPeter = add.bind(peter)

function bind(func, ctx) {
    return function () {
        return func.apply(ctx, arguments)
    }
}

var addBindedToPeter = bind(add, peter)

console.log(peter.add(1, 2))
console.log(addBindedToPeter(1, 2))
// VM2944:27 Peter: 3
// VM2944:28 Peter: 3
// undefined


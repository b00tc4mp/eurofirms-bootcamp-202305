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
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
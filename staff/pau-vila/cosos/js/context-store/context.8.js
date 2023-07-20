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
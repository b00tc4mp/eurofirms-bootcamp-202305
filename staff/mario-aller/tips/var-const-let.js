// EX 1

if (1 === 1) {
    var a = 'hola'
}

console.log(a)
// VM2045:5 hola

// equivalent to

var a

if (1 === 1) {
    a = 'hola'
}

console.log(a)
// VM2045:5 hola

// EX 2

if (1 === 1) {
    let a = 'hola'
}

console.log(a)
// VM2022:5 Uncaught ReferenceError: a is not defined
//     at <anonymous>:5:13

// EX 3, var are only block-scope inside functions

function fun() {
    var a = 1
}

fun()

console.log(a)
// VM2153:7 Uncaught ReferenceError: a is not defined
//     at <anonymous>:7:13
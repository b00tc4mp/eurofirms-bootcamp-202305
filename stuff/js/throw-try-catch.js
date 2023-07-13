function hello(to) {
    if (typeof to !== 'string') throw new Error('to is not string')

    console.log('Hello, ' + to + '!')
}
// undefined
hello('Peter')
// VM367: 4 Hello, Peter!
// undefined
hello('Mary')
// VM367: 4 Hello, Mary!
// undefined
hello(true)
// VM367: 2 Uncaught Error: to is not string
//     at hello(<anonymous>:2:39)
//     at <anonymous>:1:1
//         hello @ VM367:2
//         (anonymous) @ VM405:1
try {
    hello(1000)
} catch (error) {
    console.error(error.message)
}
// 139 - a3b3162d19e5fa0c.js: 1 to is not string
// undefined
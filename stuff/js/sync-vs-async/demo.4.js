function block(millis) {
    var before = Date.now()

    for (; Date.now() - before < millis;) {
        // noop
    }
}

function setTimeoutSync(callback, millis) {
    block(millis)

    callback()
}


console.log(1, 'start', new Date)
setTimeout(() => console.log('hola mon'), 2000)
console.log(1, 'end', new Date)

console.log(2, 'start', new Date)
setTimeout(() => console.log('hola mundo'), 3000)
console.log(2, 'end', new Date)

console.log(3, 'start', new Date)
setTimeout(() => console.log('hello world'), 4000)
console.log(3, 'end', new Date)

console.log(4, 'start', new Date)
console.log('...')
console.log(4, 'end', new Date)

// VM687:16 1 'start' Tue Jul 04 2023 10:15:39 GMT+0200 (Central European Summer Time)
// VM687:18 1 'end' Tue Jul 04 2023 10:15:39 GMT+0200 (Central European Summer Time)
// VM687:20 2 'start' Tue Jul 04 2023 10:15:39 GMT+0200 (Central European Summer Time)
// VM687:22 2 'end' Tue Jul 04 2023 10:15:39 GMT+0200 (Central European Summer Time)
// VM687:24 3 'start' Tue Jul 04 2023 10:15:39 GMT+0200 (Central European Summer Time)
// VM687:26 3 'end' Tue Jul 04 2023 10:15:39 GMT+0200 (Central European Summer Time)
// VM687:28 4 'start' Tue Jul 04 2023 10:15:39 GMT+0200 (Central European Summer Time)
// VM687:29 ...
// VM687:30 4 'end' Tue Jul 04 2023 10:15:39 GMT+0200 (Central European Summer Time)
// undefined
// VM687:17 hola mon
// VM687:21 hola mundo
// VM687:25 hello world
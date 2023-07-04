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
setTimeoutSync(() => console.log('hola mon'), 2000)
console.log(1, 'end', new Date)

console.log(2, 'start', new Date)
setTimeoutSync(() => console.log('hola mundo'), 3000)
console.log(2, 'end', new Date)

console.log(3, 'start', new Date)
setTimeoutSync(() => console.log('hello world'), 4000)
console.log(3, 'end', new Date)

console.log(4, 'start', new Date)
console.log('...')
console.log(4, 'end', new Date)

// VM683:16 1 'start' Tue Jul 04 2023 10:13:49 GMT+0200 (Central European Summer Time)
// VM683:17 hola mon
// VM683:18 1 'end' Tue Jul 04 2023 10:13:51 GMT+0200 (Central European Summer Time)
// VM683:20 2 'start' Tue Jul 04 2023 10:13:51 GMT+0200 (Central European Summer Time)
// VM683:21 hola mundo
// VM683:22 2 'end' Tue Jul 04 2023 10:13:54 GMT+0200 (Central European Summer Time)
// VM683:24 3 'start' Tue Jul 04 2023 10:13:54 GMT+0200 (Central European Summer Time)
// VM683:25 hello world
// VM683:26 3 'end' Tue Jul 04 2023 10:13:58 GMT+0200 (Central European Summer Time)
// VM683:28 4 'start' Tue Jul 04 2023 10:13:58 GMT+0200 (Central European Summer Time)
// VM683:29 ...
// VM683:30 4 'end' Tue Jul 04 2023 10:13:58 GMT+0200 (Central European Summer Time)

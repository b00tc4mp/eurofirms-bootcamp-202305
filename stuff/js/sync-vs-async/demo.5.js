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

setTimeout(() => {
    console.log('hola mon')

    console.log(1, 'end', new Date)

    console.log(2, 'start', new Date)

    setTimeout(() => {
        console.log('hola mundo')

        console.log(2, 'end', new Date)

        console.log(3, 'start', new Date)

        setTimeout(() => {
            console.log('hello world')

            console.log(3, 'end', new Date)

            console.log(4, 'start', new Date)

            console.log('...')

            console.log(4, 'end', new Date)
        }, 4000)
    }, 3000)
}, 2000)

console.log(5, 'start', new Date)

console.log('...')

console.log(5, 'end', new Date)



// VM690:16 1 'start' Tue Jul 04 2023 10:19:27 GMT+0200 (Central European Summer Time)
// VM690:46 5 'start' Tue Jul 04 2023 10:19:27 GMT+0200 (Central European Summer Time)
// VM690:48 ...
// VM690:50 5 'end' Tue Jul 04 2023 10:19:27 GMT+0200 (Central European Summer Time)
// undefined
// VM690:19 hola mon
// VM690:21 1 'end' Tue Jul 04 2023 10:19:29 GMT+0200 (Central European Summer Time)
// VM690:23 2 'start' Tue Jul 04 2023 10:19:29 GMT+0200 (Central European Summer Time)
// VM690:26 hola mundo
// VM690:28 2 'end' Tue Jul 04 2023 10:19:32 GMT+0200 (Central European Summer Time)
// VM690:30 3 'start' Tue Jul 04 2023 10:19:32 GMT+0200 (Central European Summer Time)
// VM690:33 hello world
// VM690:35 3 'end' Tue Jul 04 2023 10:19:36 GMT+0200 (Central European Summer Time)
// VM690:37 4 'start' Tue Jul 04 2023 10:19:36 GMT+0200 (Central European Summer Time)
// VM690:39 ...
// VM690:41 4 'end' Tue Jul 04 2023 10:19:36 GMT+0200 (Central European Summer Time)
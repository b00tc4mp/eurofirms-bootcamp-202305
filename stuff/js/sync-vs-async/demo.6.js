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

        console.log(5, 'start', new Date)

        console.log('...')

        console.log(5, 'end', new Date)
    }, 3000)

    console.log(6, 'start', new Date)

    console.log('...')

    console.log(6, 'end', new Date)
}, 2000)

console.log(7, 'start', new Date)

console.log('...')

console.log(7, 'end', new Date)

// VM752:16 1 'start' Tue Jul 04 2023 10:34:23 GMT+0200 (Central European Summer Time)
// VM752:58 7 'start' Tue Jul 04 2023 10:34:23 GMT+0200 (Central European Summer Time)
// VM752:60 ...
// VM752:62 7 'end' Tue Jul 04 2023 10:34:23 GMT+0200 (Central European Summer Time)
// undefined
// VM752:19 hola mon
// VM752:21 1 'end' Tue Jul 04 2023 10:34:25 GMT+0200 (Central European Summer Time)
// VM752:23 2 'start' Tue Jul 04 2023 10:34:25 GMT+0200 (Central European Summer Time)
// VM752:51 6 'start' Tue Jul 04 2023 10:34:25 GMT+0200 (Central European Summer Time)
// VM752:53 ...
// VM752:55 6 'end' Tue Jul 04 2023 10:34:25 GMT+0200 (Central European Summer Time)
// VM752:26 hola mundo
// VM752:28 2 'end' Tue Jul 04 2023 10:34:28 GMT+0200 (Central European Summer Time)
// VM752:30 3 'start' Tue Jul 04 2023 10:34:28 GMT+0200 (Central European Summer Time)
// VM752:44 5 'start' Tue Jul 04 2023 10:34:28 GMT+0200 (Central European Summer Time)
// VM752:46 ...
// VM752:48 5 'end' Tue Jul 04 2023 10:34:28 GMT+0200 (Central European Summer Time)
// VM752:33 hello world
// VM752:35 3 'end' Tue Jul 04 2023 10:34:32 GMT+0200 (Central European Summer Time)
// VM752:37 4 'start' Tue Jul 04 2023 10:34:32 GMT+0200 (Central European Summer Time)
// VM752:39 ...
// VM752:41 4 'end' Tue Jul 04 2023 10:34:32 GMT+0200 (Central European Summer Time)
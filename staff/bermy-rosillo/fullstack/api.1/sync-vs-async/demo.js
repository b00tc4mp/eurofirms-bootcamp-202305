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

function setTimeoutAsync(callback, millis) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            callback()

            resolve()
        }, millis)
    })
}

console.log(1, 'start', new Date)

setTimeoutAsync(() => {
    console.log('hola mon')

    console.log(1, 'end', new Date)
}, 2000)
    .then(() => {
        console.log(2, 'start', new Date)

        return setTimeoutAsync(() => {
            console.log('hola mundo')

            console.log(2, 'end', new Date)
        }, 3000)
    })
    .then(() => {
        console.log(3, 'start', new Date)

        return setTimeoutAsync(() => {
            console.log('hello world')

            console.log(3, 'end', new Date)
        }, 4000)
    })
    .then(() => {
        console.log(4, 'start', new Date)

        console.log('...')

        console.log(4, 'end', new Date)
    })

console.log(5, 'start', new Date)

console.log('...')

console.log(5, 'end', new Date)



// VM765:25 1 'start' Tue Jul 04 2023 10:37:49 GMT+0200 (Central European Summer Time)
// VM765:58 5 'start' Tue Jul 04 2023 10:37:49 GMT+0200 (Central European Summer Time)
// VM765:60 ...
// VM765:62 5 'end' Tue Jul 04 2023 10:37:49 GMT+0200 (Central European Summer Time)
// undefined
// VM765:28 hola mon
// VM765:30 1 'end' Tue Jul 04 2023 10:37:51 GMT+0200 (Central European Summer Time)
// VM765:33 2 'start' Tue Jul 04 2023 10:37:51 GMT+0200 (Central European Summer Time)
// VM765:36 hola mundo
// VM765:38 2 'end' Tue Jul 04 2023 10:37:54 GMT+0200 (Central European Summer Time)
// VM765:42 3 'start' Tue Jul 04 2023 10:37:54 GMT+0200 (Central European Summer Time)
// VM765:45 hello world
// VM765:47 3 'end' Tue Jul 04 2023 10:37:58 GMT+0200 (Central European Summer Time)
// VM765:51 4 'start' Tue Jul 04 2023 10:37:58 GMT+0200 (Central European Summer Time)
// VM765:53 ...
// VM765:55 4 'end' Tue Jul 04 2023 10:37:58 GMT+0200 (Central European Summer Time)
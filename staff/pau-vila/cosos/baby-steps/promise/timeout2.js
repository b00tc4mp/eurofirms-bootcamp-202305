function setTimeoutPromise(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, millis)
    })
}
console.log('... 1')

/* `setTimeoutPromise(1000)` is a function that returns a promise. It creates a delay of 1000
milliseconds (1 second) before resolving the promise. */
setTimeoutPromise(1000)
    /* The `.then(() => { console.log('hola mundo') })` is a callback function that is executed after
    the `setTimeoutPromise(1000)` promise is resolved. It logs the string 'hola mundo' to the
    console. */
    .then(() => {
        console.log('hola mundo')

        return setTimeoutPromise(1000)
    })
    .then(() => {
        console.log('hello world')

        return setTimeoutPromise(1000)
    })
    .then(() => {
        console.log('hola mon')

        return setTimeoutPromise(1000)
    })

console.log('... 2')

// ... 1
// ... 2
// hola mundo
// hello world
// hola mon

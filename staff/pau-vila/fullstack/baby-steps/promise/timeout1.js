function setTimeoutPromise(millis) {
    /* The code is creating a new Promise object that will resolve after a specified number of
    milliseconds. The `setTimeout` function is used to delay the resolution of the Promise. The
    `resolve` function is passed as the callback to `setTimeout`, so when the specified time has
    passed, the Promise will be resolved. */
    return new Promise((resolve, reject) => {
        setTimeout(resolve, millis)
    })
}
console.log('... 1')

setTimeout(() => {
    console.log('hola mundo')

setTimeout(() => {
    console.log('hello world')

setTimeout(() => {
    console.log('hola mon')
        }, 1000)
    }, 1000)
}, 1000)

console.log('... 2')

// ... 1
// ... 2
// hola mundo
// hello world
// hola mon

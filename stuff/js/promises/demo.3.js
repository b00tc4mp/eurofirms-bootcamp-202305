/*
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
*/


function setTimeoutPromise(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, millis)
    })
}


console.log('... 1')

setTimeoutPromise(1000)
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
    })

console.log('... 2')

// ... 1
// ... 2
// hola mundo
// hello world
// hola mon
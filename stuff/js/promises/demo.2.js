/*
console.log('... 1')

setTimeout(() => console.log('hola mundo'), 1000)

console.log('... 2')
*/


function setTimeoutPromise(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, millis)
    })
}


console.log('... 1')

setTimeoutPromise(1000)
    .then(() => console.log('hola mundo'))

console.log('... 2')
/*
console.log('... 1')

setTimeout(() => console.log('hola mundo'), 1000)

console.log('... 2')
*/

/* The `setTimeoutPromise` function is creating a promise that resolves after a specified number of
milliseconds. It takes in a parameter `millis` which represents the number of milliseconds to wait
before resolving the promise. Inside the function, it uses the `setTimeout` function to delay the
resolution of the promise by the specified number of milliseconds. */
function setTimeoutPromise(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, millis)
    })
}
console.log('... 1')

setTimeout(1000)
.then(() => console.log('hola mundo'))

console.log('... 2')


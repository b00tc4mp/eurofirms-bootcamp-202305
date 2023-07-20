function setTimeoutPromise(millis) {
    return new Promise((resolve, rejects) => {
        setTimeout(resolve, millis)
    })
}

console.log('...1')

setTimeoutPromise(2000)
    .then(() => console.log('hola mundo'))

console.log('...2')


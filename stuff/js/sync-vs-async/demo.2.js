function block(millis) {
    var before = Date.now()

    for (; Date.now() - before < millis;) {
        // noop
    }
}


console.log(1, new Date)

block(3000)

console.log(2, new Date)

block(2000)

console.log(3, new Date)



// VM397:10 1 Tue Jul 04 2023 09:46:19 GMT+0200 (Central European Summer Time)
// VM397:14 2 Tue Jul 04 2023 09:46:22 GMT+0200 (Central European Summer Time)
// VM397:18 3 Tue Jul 04 2023 09:46:24 GMT+0200 (Central European Summer Time)
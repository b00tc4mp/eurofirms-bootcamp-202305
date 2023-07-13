console.log(1, new Date)

var before = Date.now()

for (; Date.now() - before < 3000;) {
    // noop
}

console.log(2, new Date)


// VM342: 1 1 Tue Jul 04 2023 09: 37:01 GMT +0200(Central European Summer Time)
// VM342: 9 2 Tue Jul 04 2023 09: 37:04 GMT +0200(Central European Summer Time)
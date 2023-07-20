/**
 * The function `add` takes two numbers as parameters and returns a promise that resolves to their sum.
 * @param a - The first parameter, `a`, is the first number to be added.
 * @param b - The parameter "b" is the second number that will be added to the first number "a".
 * @returns a Promise object.
 */
function add(a, b) {
    if (typeof a !== 'number') throw new Error('a is not a number')
    if (typeof b !== 'number') throw new Error('b is not a number')

    return new Promise((resolve, reject) => {
        console.log('promise callback 1')

        resolve(a + b)
    })
}


/* The code is calling the `add` function with the arguments `10` and `20`. The `add` function returns
a promise that resolves to the sum of the two numbers. */
add(30, 20)
    .then(result => {
        console.log('promise callback 2')

        console.log(result)
    })


console.log('... 1')
console.log('... 2')
console.log('... 3')
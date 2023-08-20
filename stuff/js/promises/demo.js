const { readFile } = require('fs')

/*
readFile('./holamundo.txt', 'utf-8', (error, content) => {
    if (error) {
        console.error(error)

        return
    }

    console.log(content)

    readFile('./helloworld.txt', 'utf-8', (error, content) => {
        if (error) {
            console.error(error)

            return
        }

        console.log(content)

        readFile('./holamon.txt', 'utf-8', (error, content) => {
            if (error) {
                console.error(error)

                return
            }

            console.log(content)
        })
    })
})

// HOLA, MUNDO!
// HELLO, WORLD!
// HOLA, MON!
*/

function readFilePromise(file) {
    return new Promise((resolve, reject) => {
        readFile(file, 'utf8', (error, content) => {
            if (error) {
                reject(error)

                return
            }

            resolve(content)
        })
    })
}

readFilePromise('./holamundo.txt')
    .then(content => {
        console.log(content)

        return readFilePromise('./helloworld.txt')
    })
    .then(content => {
        console.log(content)

        return readFilePromise('./holamon.txt')
    })
    .then(content => {
        console.log(content)
    })
    .catch(error => console.error(error))

// HOLA, MUNDO!
// HELLO, WORLD!
// HOLA, MON!
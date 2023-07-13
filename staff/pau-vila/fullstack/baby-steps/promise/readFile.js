const { readFile } = require('fs')

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
//HOLA, MUNDO!
//HELLO, WORLD!
//HOLA MON!

/* The `readFilePromise` function is a helper function that wraps the `readFile` function from the `fs`
module in a promise. It takes a `file` parameter, which is the path to the file to be read. */
function readFilePromise(file){
    return new Promise((resolve, reject) => {
        readFile(file, 'utf8', (error, content) => {
            /* The code block `if (error) { reject(error) return }` is handling the error case when
            reading the file. If an error occurs while reading the file, the `reject` function is
            called with the `error` as an argument, and the promise is rejected. The `return`
            statement is used to exit the function and prevent the code from continuing to execute. */
            if (error) {
                reject(error)

                return
            }

            resolve(content)
        })
    })
}

/* `readFilePromise('./holamundo.txt')` is calling the `readFilePromise` function and passing the path
to the file `holamundo.txt` as an argument. This function reads the content of the file
asynchronously and returns a promise. */
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

//HOLA, MUNDO!
//HELLO, WORLD!
//HOLA MON!
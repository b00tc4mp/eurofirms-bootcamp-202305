const fs = require('fs')

fs.readFile('./storage.json', 'utf8', (error, json) => {
    if (error) {
        console.error(error.message)

        return
    }

    const data = JSON.parse(json)

    console.table(data)
})

console.log('...')
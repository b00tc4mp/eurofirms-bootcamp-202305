const fs = require('fs')

try {
    const json = fs.readFileSync('./storage.json', 'utf8')
    const data = JSON.parse(json)

    console.table(data)
} catch (error) {
    console.error(error.message)
}

console.log('...')
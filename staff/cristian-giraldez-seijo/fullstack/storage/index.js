const fs = require('fs')
const operation = process.argv[2]

if (operation === 'add') {
    fs.readFile('./storage.json', 'utf-8', (error, json) => {
        if (error) {
            console.error(error.message)
            return
        }

        const items = JSON.parse(json)
        const what = process.argv[3]
        const where = process.argv[4]
        const when = new Date().toISOString()

        const item = { what, where, when }
        items.push(item)
        const json2 = JSON.stringify(items)
        fs.writeFile('./storage.json', json2, (error) => {
            if (error) {
                console.error(error.message)
                return
            }
            console.table(items)
        })
    })
} else if (operation === 'update') {
    fs.readFile('./storage.json', 'utf-8', (error, json) => {
        if (error) {
            console.error(error.message)
            return
        }

        const items = JSON.parse(json)
        const index = process.argv[3]
        const what = process.argv[4]
        const where = process.argv[5]
        const when = new Date().toISOString()

        const item = { what, where, when }
        items[index] = item
        const json2 = JSON.stringify(items)
        fs.writeFile('./storage.json', json2, (error) => {
            if (error) {
                console.error(error.message)
                return
            }
            console.table(items)
        })
    })
} else if (operation === 'remove') {
    fs.readFile('./storage.json', 'utf-8', (error, json) => {
        if (error) {
            console.error(error.message)
            return
        }

        const items = JSON.parse(json)
        const index = process.argv[3]

        items.splice(index, 1)
        const json2 = JSON.stringify(items)
        fs.writeFile('./storage.json', json2, (error) => {
            if (error) {
                console.error(error.message)
                return
            }
            console.table(items)
        })
    })
}
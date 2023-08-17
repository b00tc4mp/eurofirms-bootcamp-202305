/**
 * Operates in storage (CRUD of items)
 * 
 * @example read storage
 * $ node .
 * 
 * @example add item to storage
 * $ node . add "Eggs" "Home"
 * 
 * @example update item in storage
 * $ node . update 1 "Ecologic Eggs" "Home"
 * 
 * @example remove item from storage
 * $ node . remove 1
 */

const fs = require('fs')

const operation = process.argv[2]

if (!operation)
    fs.readFile('./storage.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error.message)

            return
        }

        const items = JSON.parse(json)

        console.table(items)
    })
else {
    if (operation === 'add') {
        fs.readFile('./storage.json', 'utf8', (error, json) => {
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

            fs.writeFile('./storage.json', json2, error => {
                if (error) {
                    console.error(error.message)

                    return
                }

                console.table(items)
            })
        })
    } else if (operation === 'update') {
        fs.readFile('./storage.json', 'utf8', (error, json) => {
            if (error) {
                console.error(error.message)

                return
            }

            const items = JSON.parse(json)

            const index = process.argv[3]
            const what = process.argv[4]
            const where = process.argv[5]

            const item = items[index]
            item.what = what
            item.where = where
            item.when = new Date().toISOString()

            const json2 = JSON.stringify(items)

            fs.writeFile('./storage.json', json2, error => {
                if (error) {
                    console.error(error.message)

                    return
                }

                console.table(items)
            })
        })
    } else if (operation === 'remove') {
        // HINT use arrays .splice
    }
}
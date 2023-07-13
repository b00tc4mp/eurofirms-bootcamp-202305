/**
 * operastes in storages (CRUD of items)
 * CRUD siglas de crear, leer, actualizar y eliminar; operaciones fundamentales 
 * para gestionar y manipular datos en Apps
 * 
 * @example read storage
 * $ node .
 * 
 * @example add item to storage
 * $ node . add "" ""
 * 
 * @example update item in storage
 * $ node . update 1 "" ""
 * 
 * @example remove item from storage
 * $ node . remove 1
 *
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
        const what = process.argv[3]
        const where = process.argv[4]
        const when = new Date().toISOString()

        const item = { what, where, when }

        fs.readFile('./storage.json', 'utf8', (error, json) => {
            if (error) {
                console.error(error.menssage)

                return
            }

            const items = JSON.parse(json)

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
        const index = process.argv[3]
        const what = process.argv[4]
        const where = process.argv[5]
        const when = new Date().toISOString();

        const item = { what, where, when }

        fs.readFile('./storage.json', "utf8", (error, json) => {
            if (error) {
                console.error(error.message)

                return
            }
            const items = JSON.parse(json)

            items[index] = item

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
        const index = process.argv[3]

        fs.readFile('./storage.json', "utf8", (error, json) => {
            if (error) {
                console.error(error.message)

                return
            }
            const items = JSON.parse(json)

            items.splice(index, 1)

            const json2 = JSON.stringify(items)

            fs.writeFile('./storage.json', json2, error => {
                if (error) {
                    console.error(error.message)

                    return
                }
                console.table(items)
            })
        })
    }
}
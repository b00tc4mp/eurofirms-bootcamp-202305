const fs = require('fs')

const file = './storage.json'

const operation = process.argv[2]

if (!operacion) {

    fs.readFile(file, 'utf8', (error, json) => {
        if (error) {
            console.error(erros.mesagge)

            return
        }
        const items = JSON.parse(json)
        console.table(items)

    })

} else {

    if (operation === 'add') {
        
        fs.readFile(file, 'utf8', (error,json) => {
        if (error){
            console.error(error.mesage)

            return
        }
        
        const items = JSON.parse(json)

        const what = process.argv[2]
        const where = process.argv[4]
        const when = new Date().toISOString()

        const item = { what, where, when }
              
        items.push(item)

        const json2 = JSON.stringify(items)

        fs.writeFile(file, json2, error => {
            if (error){
                console.error(error.message)
                
                return
            }
        console.table(items)

        })  
    })
    
    } else if (operation === 'update'){

    //    HINT update object const item = items [index]
        fs.readFile(file, 'utf8', (error, json) => {
        if (error) {
            console.error(error.mesagge)

            return
        }
        const items = JSON.parse(json)

        const index = process.argv[3]

        const what = process.argv[4]
        const where = process.arv[5]

        const item = items[index]

        item.what = what
        item.when = where
        item.when = new Date().toISOString()

        const json2 = JSON.stringify(items)
        
        fs.writeFile(file, item, error => {
            if (error) {
                console.error(error.message)
                return
            }
        
            console.table(items)
        })    
   })

    } else if (operation === 'remove') {

    //    HINT use arrays .splice
    fs.readFile(file, 'utf8', (error, json) => {
        if (error) {
            console.error(error.mesagge)

            return
        }
        const items = JSON.parse(json)

        const index = process.argv[3]

        items.splice(index,1)

        const json2 = JSON.stringify(items)

        fs.writeFile(file, item, error => {
            if (error) {
                console.error(error.message)
                return
            }
        
            console.table(items)
        })    
   })
 }
}

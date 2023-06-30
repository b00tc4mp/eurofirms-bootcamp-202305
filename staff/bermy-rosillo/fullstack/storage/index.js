const { error } = require('console')
const fs = require('fs') //fs -->file System
const { json } = require('stream/consumers')

//json -->string 
const file = './storage.json'

const operation = process.argv[2]
if (!operation) {
    fs.readFile(file, 'utf8', (error, json) => {
        if (error) {
            console.error(error.message)

            return
        }
        const items = JSON.parse(json)
        console.table(items)
    })
}
//-------------------

else {
    if (operation === 'add') {
        fs.readFile(file, 'utf8', (error, json) => {
            if (error) {
                console.error(error.message)

                return
            }


            const what = process.argv[3]
            const where = process.argv[4]
            const when = new Date().toISOString()

            const item = {
                what, where, when
            }

            items.push(item)

            const json2 = JSON.stringify(items)

            fs.writeFile(file, json2, error => {

                if (error) {
                    console.error(error.message)

                    return
                }
                console.table(items)
            })

        })
    }
}

if (operation === 'update') {

    fs.readFile(file, 'utf8', (error, json) => {

        if (error) {
            console.error(error.message)

            return
        }

        //write to update
        const index = process.argv[3]

        const what = process.argv[4]
        const where = process.argv[5]

        const items = JSON.parse(json)

        const item = items[index]

        item.what = what
        item.where = where
        item.when = new Date().toISOString()

        const json2 = JSON.stringify(items)

         fs.writeFile(file,json2,(error)=>{

            if(error){
                console.error(error.message)

            }
            console.table(items)
            console.log(json2)
         })

    })
}
//--------------
//remove 
if (operation === 'remove') {

    fs.readFile(file, 'utf8', (error, json) => {

        if (error) {
            console.error(error.message)

            return
        }

        //write to remove
        const index = process.argv[3]

        const items = JSON.parse(json)

        items.splice(index,1)

        const json2 = JSON.stringify(items) //convierte a string JSOn

         fs.writeFile(file,json2,(error)=>{

            if(error){
                console.error(error.message)

                return

            }
            console.table(items)
            
         })

    })
}

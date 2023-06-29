const fs = require('fs')

class Storage {

    constructor(name) {
        this.name = name
        this.items = []
    }

    draw(text) {
        console.log('Storage: ' + this.name + text ? ' > ' + text : ' -')
        console.table(this.items)
    }

    toHD(file) {
        const fileName = file ? file : './' + this.name + '.json'
        fs.writeFile(fileName, JSON.stringify(this.items, null, " "), error => {
            if (error) console.error('No se puede escribir en HD')
            this.draw('to HD')
        })
    }

    fromHD(file) {
        const fileName = file ? file : './' + this.name + '.json'
        fs.readFile(fileName, 'utf8', (error, dataFile) => {
            this.items = error ? [] : JSON.parse(dataFile)
            this.draw('from HD')
        })
    }

    itemPut(what, where) {
        fs.readFile('./' + this.name + '.json', 'utf8', (error, dataFile) => {
            this.items = error ? [] : JSON.parse(dataFile)

            const when = new Date().toISOString()
            const item = { what, where, when }
            this.items.push(item)

            fs.writeFile('./' + this.name + '.json', JSON.stringify(this.items, null, " "), error => {
                if (error) console.error('No se puede escribir en HD')
                this.draw('Item input')
            })
        })
    }

    itemUpdate(pos, what, where) {
        fs.readFile('./' + this.name + '.json', 'utf8', (error, dataFile) => {
            this.items = error ? [] : JSON.parse(dataFile)

            const what2 = what ? what : this.items[pos].what
            const where2 = where ? where : this.items[pos].where
            const when = new Date().toISOString()
            this.items[pos] = { what: what2, where: where2, when }

            fs.writeFile('./' + this.name + '.json', JSON.stringify(this.items, null, " "), error => {
                if (error) console.error('No se puede escribir en HD')
                this.draw('Item update')
            })
        })
    }

    itemDelete(pos) {
        fs.readFile('./' + this.name + '.json', 'utf8', (error, dataFile) => {
            this.items = error ? [] : JSON.parse(dataFile)

            this.items.splice(pos, 1)

            fs.writeFile('./' + this.name + '.json', JSON.stringify(this.items, null, " "), error => {
                if (error) console.error('No se puede escribir en HD')
                this.draw('Item delete')
            })
        })
    }
}

function errorArg(num, msg) {
    if (process.argv.length !== num) {
        console.error(msg)
        return true
    }
    return false
}

// main

const sto = new Storage('store')

const operation = process.argv[2].toLowerCase()
switch (operation) {
    case 'add':
        if (!errorArg(5, 'add: error arg')) sto.itemPut(process.argv[3], process.argv[4])
        break
    case 'upt':
        if (!errorArg(6, 'update: error arg')) sto.itemUpdate(process.argv[3], process.argv[4], process.argv[5])
        break
    case 'del':
        if (!errorArg(4, 'delete: error arg')) sto.itemDelete(process.argv[3])
        break
    default: console.error('Operación incorrecta')
}

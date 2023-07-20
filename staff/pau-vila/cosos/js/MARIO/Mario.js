const fs = require('fs')

function Storage(name) {
    this.name = name
    this.items = []
}
Storage.prototype.draw = function (text) {
    console.log('Storage: ' + this.name + text ? ' > ' + text : ' -')
    console.table(this.items)
}
Storage.prototype.toHD = function (file) {
    const fileName = file ? file : './' + this.name + '.json'
    fs.writeFile(fileName, JSON.stringify(this.items, null, " "), error => {
        if (error) console.error('No se puede escribir en HD')
        this.draw('to HD')
    })
}
Storage.prototype.fromHD = function (file) {
    const fileName = file ? file : './' + this.name + '.json'
    fs.readFile(fileName, 'utf8', (error, dataFile) => {
        this.items = error ? [] : JSON.parse(dataFile)
        this.draw('from HD')
    })
}
Storage.prototype.itemPut = function (what, where) {
    fs.readFile('./' + this.name + '.json', 'utf8', function (error, dataFile) {
        this.items = error ? [] : JSON.parse(dataFile)
        
        const when = new Date().toISOString()
        const item = { what, where, when }
        this.items.push(item)

        fs.writeFile('./' + this.name + '.json', JSON.stringify(this.items, null, " "), function(error) {
            if (error) console.error('No se puede escribir en HD')
            this.draw('Item input')
        }.bind(this))
        
    }.bind(this))
}


// main

// populate
const sto = new Storage('store')

sto.fromHD()

sto.itemPut('donuts','home')

sto.draw('main')
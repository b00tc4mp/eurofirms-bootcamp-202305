function Store() {
    this.store = []
    this.count = 0
}

Store.prototype.add = function (what) {
    this.count++

    const id = this.count

    const item = { id, what }

    this.store.push(item)

    return id
}

Store.prototype.take = function (id) {
    const index = this.store.findIndex(item => item.id === id)

    if (index < 0) throw new Error('item not found')

    const item = this.store[index]

    //const what = item.what
    const { what } = item

    this.store.splice(index, 1)

    return what
}

const mystore = new Store()

mystore.add('hola mundo')
// 1

mystore.add('hello world')
// 2

mystore.add('pryvit svit')
// 3

mystore.store1.length
// 3

mystore.take(2)
// 'hello world'

mystore.store.length
// 2

//---------------------------------------

class Store {
    constructor() {
        this.store = []
        this.count = 0
    }

    add(what) {
        //debugger

        this.count++

        const id = this.count

        const item = { id, what }

        this.store.push(item)

        setTimeout(function () {
            console.log(Store.name + ' -> add(' + what + '), status = ' + JSON.stringify(this.store))
        }.bind(this), 500)

        return id
    }

    take(id) {
        const index = this.store.findIndex(item => item.id === id)

        if (index < 0) throw new Error('item not found')

        const item = this.store[index]

        //const what = item.what
        const { what } = item

        this.store.splice(index, 1)

        setTimeout(function () { console.log(Store.name + '-> take(' + id + '), status = ' + JSON.stringify(this.store)) }.bind(this), 500)

        return what
    }
}

const mystore = new Store()

mystore.add('hola mundo')
// 1
// VM1283:15 Store -> add(hola mundo), status = [{"id":1,"what":"hola mundo"}]
mystore.add('hello world')
// 2
// VM1283:15 Store -> add(hello world), status = [{"id":1,"what":"hola mundo"},{"id":2,"what":"hello world"}]
mystore.add('pryvit svit')
// 3
// VM1283:15 Store -> add(pryvit svit), status = [{"id":1,"what":"hola mundo"},{"id":2,"what":"hello world"},{"id":3,"what":"pryvit svit"}]
mystore.take(2)
// 'hello world'
// VM1283:32 Store-> take(2), status = [{"id":1,"what":"hola mundo"},{"id":3,"what":"pryvit svit"}]
mystore.add('hallo welt')
// 4
// VM1283:15 Store -> add(hallo welt), status = [{"id":1,"what":"hola mundo"},{"id":3,"what":"pryvit svit"},{"id":4,"what":"hallo welt"}]

//---------------------------------------

class Store {
    constructor() {
        this.store = []
        this.count = 0
    }

    add(what) {
        this.count++

        const id = this.count

        const item = { id, what }

        this.store.push(item)

        setTimeout(() => console.log(Store.name + ' -> add(' + what + '), status = ' + JSON.stringify(this.store)), 500)

        return id
    }

    take(id) {
        const index = this.store.findIndex(item => item.id === id)

        if (index < 0) throw new Error('item not found')

        const item = this.store[index]

        //const what = item.what
        const { what } = item

        this.store.splice(index, 1)

        setTimeout(() => console.log(Store.name + '-> take(' + id + '), status = ' + JSON.stringify(this.store)), 500)

        return what
    }
}

const mystore = new Store()

mystore.add('hola mundo')
// 1
// VM1283:15 Store -> add(hola mundo), status = [{"id":1,"what":"hola mundo"}]
mystore.add('hello world')
// 2
// VM1283:15 Store -> add(hello world), status = [{"id":1,"what":"hola mundo"},{"id":2,"what":"hello world"}]
mystore.add('pryvit svit')
// 3
// VM1283:15 Store -> add(pryvit svit), status = [{"id":1,"what":"hola mundo"},{"id":2,"what":"hello world"},{"id":3,"what":"pryvit svit"}]
mystore.take(2)
// 'hello world'
// VM1283:32 Store-> take(2), status = [{"id":1,"what":"hola mundo"},{"id":3,"what":"pryvit svit"}]
mystore.add('hallo welt')
// 4
// VM1283:15 Store -> add(hallo welt), status = [{"id":1,"what":"hola mundo"},{"id":3,"what":"pryvit svit"},{"id":4,"what":"hallo welt"}]


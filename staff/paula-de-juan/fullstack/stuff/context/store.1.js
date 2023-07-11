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
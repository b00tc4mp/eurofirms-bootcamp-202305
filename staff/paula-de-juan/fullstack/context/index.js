// Función constructora Store con array vacio y contador en cero
function Store() {
    this.store = []
    this.count = 0
}

Store.prototype.add = function (what){
    this.count++

    const id = this.count
     
    const item = { id , what }

    this.store.push(item)

    return id

}

const myStore = new Store()

myStore.add(true)
// 1
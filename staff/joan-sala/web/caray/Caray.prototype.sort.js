Caray.prototype.sort = function (callback) {
    if (callback) {
        let itemsChanged
        do {
           itemsChanged = false
            for (let i = 0; i < this.length - 1; i++) {
                const returnFromCallback = callback(this[i], this[i + 1])

                if (returnFromCallback > 0) {
                    const element = this[i]

                    this[i] = this[i + 1]

                    this[i + 1] = element

                    itemsChanged = true
                }
            }
        }while(itemsChanged)

    } else {
        let elementsChanged
        do {
            elementsChanged = false

            for (let i = 0; i < this.length - 1; i++) {
                const element = this[i].toString() //function
                const element2 = this[i + 1].toString() //function

                if (element > element2) {
                    const aux = this[i]

                    this[i] = this[i + 1]
                    this[i + 1] = aux

                    elementsChanged = true
                }
            }
        } while (elementsChanged)
    }
    return this

}
function Caray(...items) {
    for (let i = 0; i < items.length; i++) {
        this[i] = items[i]
    }

    this.length = items.length
}

Caray.prototype.sort = function (callback) {
    let elementsChanged
    do {
        elementsChanged = false

        for (let i = 0; i < this.length - 1; i++) {
            if (callback) {
                const returnFromCallback = callback(this[i], this[i + 1])
                if (returnFromCallback > 0) {
                    const element = this[i]
        
                    this[i] = this[i + 1]
        
                    this[i + 1] = element
        
                    elementsChanged = true
                }
            } else {
                const element = this[i].toString() //function
                const element2 = this[i + 1].toString() //function

                if (element > element2) {
                    const aux = this[i]

                    this[i] = this[i + 1]
                    this[i + 1] = aux

                    elementsChanged = true
                }
            }
        }
    } while (elementsChanged)
    return this
}

Caray.prototype.splice = function (startIndex, deleteCount, ...items) {
    if (startIndex < 0) startIndex += this.length
    if (startIndex < 0) startIndex = 0
    if (startIndex >= this.length) startIndex = this.length - 1
    if (deleteCount === undefined) deleteCount = this.length - startIndex

    const modif = new Caray()
    modif.length = 0
    let segment = new Caray()
    segment.length = 0

    // Parte invariante izq del array
    for (let i = 0; i < startIndex; i++) {
        modif[modif.length] = this[i]
        modif.length++
    }

    // Parte interior
    for (let i = 0; i < items.length; i++) {
        modif[modif.length] = items[i]
        modif.length++
    }

    // Parte invariante der del array
    for (let i = startIndex + deleteCount; i < this.length; i++) {
        modif[modif.length] = this[i]
        modif.length++
    }

    // Segmento
    for (let i = startIndex; i < startIndex + deleteCount; i++) {
        segment[segment.length] = this[i]
        segment.length++
    }

    // Modificacion del array inicial

    let difference = this.length - modif.length
    if (difference > 0)
        for (let i = 0; i < difference; i++)
            delete this[this.length - 1 - i]

    this.length = modif.length

    for (let i = 0; i < modif.length; i++)
        this[i] = modif[i]

    // Retornos
    return segment
}

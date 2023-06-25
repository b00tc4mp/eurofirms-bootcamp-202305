function Caray(...elements) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]

        this[i] = element
    }

    this.length = elements.length
}

Caray.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        callback(element)
    }
}

Caray.prototype.find = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        const result = callback(element)

        if (result)
            return element
    }
}

Caray.prototype.push = function (...elements) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]

        const index = this.length

        this[index] = element

        this.length++
    }

    return this.length
}

Caray.prototype.pop = function () {
    if (!this.length)
        return undefined

    const index = this.length - 1

    const element = this[index]

    this.length--

    delete this[index]

    return element
}
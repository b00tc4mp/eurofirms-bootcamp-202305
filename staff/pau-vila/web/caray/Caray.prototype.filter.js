Caray.prototype.filter = function (callback) {
    const results = new Caray

    for (let i =0; i < this.length; i++) {
        const elemnt = this[i]

        const matches = callback(element)

        if (matches) {
            results[results.length] = element
            results.length++
        }
    }

    return results
}
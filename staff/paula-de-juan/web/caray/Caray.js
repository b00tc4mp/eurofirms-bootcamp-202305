function Caray(...items) {
    for (let i = 0; i < items.length; i++) {
        this[i] = items[i]
    }

    this.length = items.length
}

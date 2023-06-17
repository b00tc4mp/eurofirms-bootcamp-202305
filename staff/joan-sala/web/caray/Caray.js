function Caray(...items) {
    for (let i = 0; i < items.length; i++) {
        this[i] = items[i]
    }

    this.length = items.length
}
Caray.prototype.every = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i])) 
        return false
    }
    return true
  }

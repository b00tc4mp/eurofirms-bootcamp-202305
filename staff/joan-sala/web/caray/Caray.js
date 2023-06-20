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


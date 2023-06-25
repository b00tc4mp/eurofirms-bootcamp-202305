function Context(storage) {
    this.storage = storage
}

Context.prototype.set = function (key, value) {
    this.storage[key] = value
}

Context.prototype.get = function (key, type) {
    if (type === 'number')
        return parseInt(this.storage[key])
    else if (type === 'string')
        return this.storage[key]
}

var context = new Context(sessionStorage)



// ƒ(key, type) {
//     if (type === 'number')
//         return parseInt(this.storage[key])
//     else if (type === 'string')
//         return this.storage[key]
// }

context
// Context { storage: Storage }
context.set('userId', 100)
// undefined
context.get('userId', 'number')
// 100
context.get('userId', 'string')
// '100'
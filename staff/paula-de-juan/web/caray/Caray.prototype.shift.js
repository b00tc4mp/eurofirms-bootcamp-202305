Caray.prototype.unshift = function (...items) {
    for (let i = this.length-1; i >= 0; i--){
       
        this[i+items.length] = this[i]
    }

    for (let i = 0; i < items.length; i++){
        this[i] = items[i]
    }
    this.length = this.length + items.length
 return this.length
}

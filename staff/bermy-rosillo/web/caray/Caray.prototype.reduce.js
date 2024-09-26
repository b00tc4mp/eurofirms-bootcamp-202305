Caray.prototype.reduce = function(callback,initialValue){
    let index = 0

    if(initialValue === undefined){
        initialValue = this[0]

        index = 1
    }
    let accumulator = initialValue

    for( let i = index ; i < this.length ; i++){
        const element = this[i]

        const valueFromCallback = callback(accumulator, element)

        accumulator = valueFromCallback
    }

    return accumulator
}
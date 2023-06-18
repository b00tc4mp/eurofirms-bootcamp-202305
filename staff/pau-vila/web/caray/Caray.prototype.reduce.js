Caray.prototype.reduce = function (callback, initialValue) {
    let index = 0
    
    if(initialValue === undefined){
        initialValue = this[0]

        index = 1

    }
    let accumulator = initialValue

    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        const valueFromCallback = callback(accumulator, element)

        accumulator = valueFromCallback

    }
    return accumulator
}

//ejecuta una función reductora sobre cada elemento de un array
// devuelve como resultado un único valor
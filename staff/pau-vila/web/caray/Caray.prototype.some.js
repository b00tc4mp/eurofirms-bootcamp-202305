Caray.prototype.some = function (barbies,callback) {
    for (let i = 0; i < Caray.length; i++) {
        const element = Caray[i]

        const result = callback(element)

        if (result === true)
            return true
    }
    return false

}
//corregir
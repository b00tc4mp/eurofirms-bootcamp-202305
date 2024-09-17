function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        const result = callback(element)

        if (result === true)
            return true
    }

    return false
}

//comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada
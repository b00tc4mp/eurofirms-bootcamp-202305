function reverse (array) {
    if (array.length === 0) return array

    const arrayHalf = parseInt(array.length/2)

    for(let i = 0; i<arrayHalf; i++) {
        const aux = array[i]

        array[i] = array[array.length-i-1]

        array[array.length-i-1] = aux
    }

    return array
}

//invierte el orden de los elementos de un array
//El primer elemento pasa a ser el último y el último pasa a ser el primero
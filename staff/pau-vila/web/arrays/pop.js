function pop(array) {
    const index = array.length -1

    const element = array[index]

    array.length--

    return element
}

//elimina el último elemento de un array y lo devuelve
//cambia la longitud del array
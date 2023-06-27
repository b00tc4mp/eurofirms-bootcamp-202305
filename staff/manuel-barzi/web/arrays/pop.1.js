function pop(array) {
    const index = array.length - 1

    const element = array[index]

    //array.length = array.length - 1
    array.length--

    return element
}
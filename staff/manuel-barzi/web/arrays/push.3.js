function push(array) {
    for (let i = 1; i < arguments.length; i++) {
        const element = arguments[i]

        const index = array.length

        array[index] = element
    }

    return array.length
}
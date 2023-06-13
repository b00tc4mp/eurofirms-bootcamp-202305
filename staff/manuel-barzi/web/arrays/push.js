function push(array, ...elements) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]

        const index = array.length

        array[index] = element
    }

    return array.length
}
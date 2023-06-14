function slice(array, start) {
    const copy = []

    for (let i = start; i < array.length; i++) {
        const element = array[i]

        copy[copy.length] = element
    }

    return copy
}
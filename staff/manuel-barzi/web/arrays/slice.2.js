function slice(array, start) {
    const copy = []

    if (start < 0)
        start = array.length + start

    for (let i = start; i < array.length; i++) {
        const element = array[i]

        copy[copy.length] = element
    }

    return copy
}
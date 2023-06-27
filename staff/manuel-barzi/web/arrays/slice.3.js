function slice(array, start) {
    const copy = []

    if (start < 0) {
        start = array.length + start

        if (start < 0)
            start = 0
    }

    for (let i = start; i < array.length; i++) {
        const element = array[i]

        copy[copy.length] = element
    }

    return copy
}
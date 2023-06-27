function slice(array, start) {
    const copy = []

    if (start < 0) {
        const diff = array.length + start

        // if (diff < 0)
        //     start = 0
        // else
        //     start = diff

        start = diff < 0 ? 0 : diff
    }

    for (let i = start; i < array.length; i++) {
        const element = array[i]

        copy[copy.length] = element
    }

    return copy
}
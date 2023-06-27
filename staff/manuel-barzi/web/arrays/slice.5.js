function slice(array, start, end) {
    const copy = []

    if (start < 0) {
        const diff = array.length + start

        // if (diff < 0)
        //     start = 0
        // else
        //     start = diff

        start = diff < 0 ? 0 : diff
    }

    // if (!end) // WARN this doesn't work in case end === 0!
    if (end === undefined)
        end = array.length

    for (let i = start; i < end; i++) {
        const element = array[i]

        copy[copy.length] = element
    }

    return copy
}
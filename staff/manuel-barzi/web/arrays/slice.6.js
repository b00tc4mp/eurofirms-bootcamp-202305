function slice(array, start, end) {
    const copy = []

    if (start < 0) {
        const diff = array.length + start

        start = diff < 0 ? 0 : diff
    }

    if (end === undefined)
        end = array.length
    else if (end < 0)
        end = array.length + end

    for (let i = start; i < end; i++) {
        const element = array[i]

        copy[copy.length] = element
    }

    return copy
}
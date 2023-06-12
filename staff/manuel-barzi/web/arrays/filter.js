function filter(array, callback) {
    const results = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        const matches = callback(element)

        if (matches)
            results.push(element)
    }

    return results
}
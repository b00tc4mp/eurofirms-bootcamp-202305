function concat(...arrays) {
    const result = []
    for (let i = 0; i < arrays.length; i++)
        for (let j = 0; j < arrays[i].length; j++)
            result[result.length] = arrays[i][j]

    return result
}
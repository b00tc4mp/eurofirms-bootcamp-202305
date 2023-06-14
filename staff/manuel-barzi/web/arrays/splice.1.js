function splice(array, start, deleteCount, item1) {
    const deletedElements = []

    for (let i = start; i < start + deleteCount; i++) {
        const element = array[i]

        deletedElements[deletedElements.length] = element
    }

    array[start] = item1

    return deletedElements
}
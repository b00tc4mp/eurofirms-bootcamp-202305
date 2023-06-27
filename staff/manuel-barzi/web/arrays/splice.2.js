function splice(array, start, deleteCount, item1) {
    const deletedElements = []

    for (let i = start; i < start + deleteCount; i++) {
        const element = array[i]

        deletedElements[deletedElements.length] = element
    }

    array[start] = item1

    const displacement = deleteCount - 1

    for (let i = start + deleteCount; i < array.length; i++) {
        const element = array[i]

        array[i - displacement] = element
    }

    //array.length = array.length - displacement
    array.length -= displacement

    return deletedElements
}
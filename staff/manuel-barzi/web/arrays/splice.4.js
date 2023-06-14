function splice(array, start, deleteCount, ...items) {
    const deletedElements = []

    for (let i = 0; i < deleteCount; i++) {
        const element = array[start + i]

        deletedElements[deletedElements.length] = element
    }

    if (deleteCount >= items.length) {
        for (let i = 0; i < items.length; i++) {
            const item = items[i]

            array[start + i] = item
        }

        const displacement = deleteCount - items.length

        for (let i = start + deleteCount; i < array.length; i++) {
            const element = array[i]

            array[i - displacement] = element
        }

        array.length -= displacement
    } else {
        const displacement = items.length - deleteCount

        for (let i = array.length - 1; i >= start + deleteCount; i--) {
            const element = array[i]

            array[i + displacement] = element
        }

        for (let i = 0; i < items.length; i++) {
            const item = items[i]

            array[start + i] = item
        }
    }

    return deletedElements
}
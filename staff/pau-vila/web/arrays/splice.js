function splice(array, start, deleteCount, item1) {
    const deleteElements = []

    for ( let i =start; i < start + deleteCount; i++) {
        const element = array[i]

        deleteElements[deleteElements.length] = element
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


//cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
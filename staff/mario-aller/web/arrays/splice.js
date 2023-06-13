function splice(array, startIndex, deleteCount, ...items) {
    if (startIndex < 0) startIndex += array.length
    if (deleteCount === undefined) deleteCount = 1
    const modif = []
    const segment = []

    // Parte invariante izq del array
    for (let i = 0; i < startIndex; i++)
        modif[modif.length] = array[i]

    // Parte interior
    for (let i = 0; i < items.length; i++)
        modif[modif.length] = items[i]

    // Parte invariante der del array
    for (let i = startIndex + deleteCount; i < array.length; i++)
        modif[modif.length] = array[i]

    // Segmento
    for (let i = startIndex; i < startIndex + deleteCount; i++)
        segment[segment.length] = array[i]

    // Modificacion del array inicial
    array.length = modif.length
    for (let i = 0; i < modif.length; i++)
        array[i] = modif[i]

    // Retornos
    return segment
}

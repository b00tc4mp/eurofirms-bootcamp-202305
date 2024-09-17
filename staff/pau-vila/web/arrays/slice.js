function slice(array, indexStart, idexEnd) {
    const arrayResult = []

    if(!idexEnd || idexEnd > array.length) {
        indexEnd = array.length
    }
    
    if(!indexStart) {
        indexStart = 0
    }

    if(indexStart < 0) {
        indexStart += array.length
    }

    for(let i = indexStart; i < idexEnd; i++) {
        arrayResult[arrayResult.length] = array[i]
    }

    return arrayResult
}

//devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido) 
//El array original no se modificará.
function slice(array,indexStart, indexEnd){
    const arrayResult = []

    if(!indexEnd || indexEnd > array.length){
         indexEnd = array.length
    }

    if(!indexStart){
        indexStart = 0
    }

    if(indexStart < 0){
        indexStart += array.length
    }

    if(indexEnd < 0){
        indexEnd += array.length
    }

    for(let i =indexStart ; i < indexEnd ; i++){
        arrayResult[arrayResult.length] = array[i]
    }

    return arrayResult
}
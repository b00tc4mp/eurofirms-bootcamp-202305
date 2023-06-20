function shift(array){
    const firstElement = array[0]
    if(array.length === 0) return

    for(let i = 0; i < array.length -1; i++){
        array[i] = array[i + 1]
    }
    array.length --

    return firstElement
}
function slice(array, start, end){
    const arraySliced = []
    for(let i=start;i<end;i++) {
        arraySliced[arraySliced.length] = array[i]
    }
    return arraySliced
}
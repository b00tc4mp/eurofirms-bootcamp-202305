function slice(array, start, end){
    const arraySliced = []

    for(let i = start; i < end; i++){
        const element = array[i]
        arraySliced[arraySliced.length] = array[i]
    }
}
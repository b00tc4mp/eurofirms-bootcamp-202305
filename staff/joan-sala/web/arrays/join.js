function join(array, separator){
    let element = ''
    if(separator === undefined)
        separator = ','
    for(let i = 0; i < array.length; i++){
        if(i === 0) element = array[i]
        else element = element + separator + array[i]
    }
    return element
}
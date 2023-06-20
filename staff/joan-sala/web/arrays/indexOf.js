function indexOf(array, element, startIndex){
    if(!startIndex) startIndex = 0

    for(let i = 0;i < array.length;i++){
        if(element === array[i]) return i
    }
    retun -1
}
function pop(array){
    if(!array.length) return

    const lastPosition = array.length -1

    const lastElement =  array[lastPosition]

    //array.length  = array.length - 1
    array.length--
    
    return lastElement
}
function pop(array){

    const _element = []

    for (let i = 0; i < array.length; i++){
        const element = array[array.length-1]
        array[i] = array[i-1]         
    }
    if (array[array.length-1] === undefined ){
        array.length = array.length -1
      }
    element = _element

    return element
}
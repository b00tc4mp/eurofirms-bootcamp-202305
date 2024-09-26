/*To apply upperCase to each element */
function map(array,callback){
    newArray =[]
    for(let i = 0 ; i < array.length ; i++){
        const element = array[i]

        newArray[i] = callback(element)

    }
    return newArray
}
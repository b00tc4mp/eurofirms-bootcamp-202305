//index: indice de comiennzo
function includes(array, value, index){
    if(index === undefined) 
        index = 0
    for(let i = index; i < array.length; i++){
        const element = array[i]
        
        if(element === value )
            return true 
    } 
    return false
}
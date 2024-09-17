function filter(array, callback){
    const result = []
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            result.push(array[i])
        }
    }
    
    return result
}

//crea un nuevo array 
//con todos los elementos que cumplan la condición implementada por la función dada
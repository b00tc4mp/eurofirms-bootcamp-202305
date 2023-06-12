// Recorre todo el array itera y devuelve el callback
function find(array, callback){
    for(let i; i < array.length; i++){
        const element = array[i]
        
        const result = callback(element)

        if(result) return element
    }  
}
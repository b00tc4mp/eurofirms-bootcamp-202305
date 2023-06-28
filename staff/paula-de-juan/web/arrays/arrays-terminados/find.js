function find (array, callback){

    for (let i = 0; i < array.length; i++){
        const element = array[i] 

        const result = callback(element)

        if (result){
            return element
        }
    }
}
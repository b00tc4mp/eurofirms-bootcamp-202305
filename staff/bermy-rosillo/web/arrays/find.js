function find(array,callback){
    for(let i = 0 ; i < array.length ; i++){
        const person = array[i]

        if(callback(person)){
            return true 
        }
    }
//return undefined if the condiction of the callback don't macth
}
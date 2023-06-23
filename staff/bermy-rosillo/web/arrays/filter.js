/*return an array empty o full */
function filter(array,callback){
    const newArray=[]

    for(let i = 0 ; i < Array.length ; i++){
        const element = array[i]

        const result=callback(element)
        if(result)
            newArray.push(element)      
    }
    return newArray
}
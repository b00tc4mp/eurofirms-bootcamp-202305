/*function */
function every(array,callback) {
    // 1 recorro
    //let exist=false

    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        if(!callback(element)){
            console.log(element)
            return false
        }
    }
    return true
}
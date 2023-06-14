/*function */
function every(array,callback) {
    // 1 recorro
    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        if(callback(element))
            return true
    }
    return false
}
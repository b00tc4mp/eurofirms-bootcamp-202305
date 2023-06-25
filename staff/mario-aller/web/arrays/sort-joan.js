function sort(array, callback) {
    if (callback) {
        for(let i = 0; i < array.length - 1; i++){
           const returnFromCallback =  callback(array[i], array[i+1])

           if(returnFromCallback > 0){
                
           }
           else if(returnFromCallback < 0){

           }
           else if(returnFromCallback === 0){

           }
        }
    } else {
        let elementsChanged
        do {
            elementsChanged = false

            for (let i = 0; i < array.length - 1; i++) {
                const element = array[i].toString() //function
                const element2 = array[i + 1].toString() //function

                if (element > element2) {
                    const aux = array[i]

                    array[i] = array[i + 1]
                    array[i + 1] = aux

                    elementsChanged = true
                }
            }
        } while (elementsChanged)
    }
    return array
}
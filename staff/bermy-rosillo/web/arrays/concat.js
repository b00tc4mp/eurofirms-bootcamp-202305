/*To put all the elements in a new array */
function concat(...array) {
    newArray = []

    for (let i = 0; i < arguments.length; i++) {
        newArray[i] = arguments[i]
        
    }

     return newArray
}
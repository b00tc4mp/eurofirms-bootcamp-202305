function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        const result = callback(element)

        if (result === true)
            return true
    }

    return undefined
}
//function find(index) {
   // console.log('%c' + this, 'font-size: 1rem; color: dodgerblue;')
//}
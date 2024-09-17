function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        callback(element)
    }
}

//ejecuta la función indicada una vez por cada elemento del array


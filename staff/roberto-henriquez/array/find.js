function find(array, Callback) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        const result = Callback(element)

        if (result)
            return element


    }
}
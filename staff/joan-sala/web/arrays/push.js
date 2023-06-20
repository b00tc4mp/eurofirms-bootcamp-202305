function push(array, element) {
    if (arguments.length === 2) {
        const index = array.length

        array[index] = element

        return array.length
    } else if (arguments.length > 2) {
        for (let i = 1; i < arguments.length; i++) {
            const element = arguments[i]

            const index = array.length

            array[index] = element
        }

        return array.length
    }
}
function concat(array, ...elements) {

    const results = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        results.push(element)
    }
    for (let i = 0; i < elements.length; i++){
        const element = elements[i]
        results.push(element)
    }
    return results
}

//se usa para unir arrays. 
//bucle anidado
//concatenar


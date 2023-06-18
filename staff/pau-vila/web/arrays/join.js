function join(array, callback)  {
for (let i = 0; i < array.length; i++) {
    const a = array[i]

    const result = callback(a)

    if (result)
        return result
} 
}

//crea y devuelve una nueva cadena (string) concatenando todos los elementos de una matriz

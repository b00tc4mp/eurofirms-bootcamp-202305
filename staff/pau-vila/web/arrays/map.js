function map(array, callback){
    const mapped = []

    for(let i = 0; i<array.length; i++) {
        const element = array [i]

        mapped[i] = callback(element)
    }

    return mapped
}

//crea un nuevo array 
//los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
function every(array, callback) {
    for(i=0;i<array.length;i++) {
        if (!callback(array[i])) return false
    }
return true;
}

//Determina si todos los elementos en el array satisfacen una condición
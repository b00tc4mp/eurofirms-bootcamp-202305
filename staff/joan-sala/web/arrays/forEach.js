//El método forEach() ejecuta la función indicada una vez por cada elemento del array.
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i]


        //Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
        callback(element)
    }
}
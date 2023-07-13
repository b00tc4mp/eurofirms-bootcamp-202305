/**
 * La función recupera todos los usuarios de una colección determinada.
 * @param collection - El parámetro `colección` es el objeto de colección de MongoDB del que desea recuperar a todos los usuarios.
 * @returns La función `retrieveAllUsers` devuelve una promesa que se resuelve en una matriz de todos los usuarios de la colección dada.
 */
function retrieveAllUsers(collection) {
    return collection.find().toArray()
        .catch(err => console.error(err))
}
module.exports = retrieveAllUsers
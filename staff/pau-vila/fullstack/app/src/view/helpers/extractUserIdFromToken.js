/* La función `extractUserIdFromToken` toma un token como entrada y extrae el ID de usuario de él. */
function extractUserIdFromToken(token) {
    /* La línea `const from = token.indexOf('.') + 1` busca el índice de la primera aparición del
    carácter '.' en la cadena `token` y añadiéndole 1. Luego está asignando este valor a la variable
    constante `desde`. */
    const from = token.indexOf('.') + 1
    /* La línea `const to = token.lastIndexOf('.')` busca el índice de la última aparición del carácter
    '.' en la cadena `token` y asignándolo a la variable constante `to`. Este índice se utilizará
    para determinar el final de la subcadena que debe extraerse del token. */
    const to = token.lastIndexOf('.')
   
    /* La línea `const dataB64 = token.slice(from, to)` extrae una parte de la cadena `token`. Utiliza
    el método `slice` para extraer una subcadena que comienza en el índice `from` (que es el índice
    de la primera aparición del carácter '.' en la cadena `token` más 1) y termina en el índice `to`
    (que es el índice de la última aparición del carácter '.' en la cadena 'token'). */
    const dataB64 = token.slice(from, to)

    /* La línea `const dataJSON = atob(dataB64)` decodifica la cadena codificada en base64 `dataB64` y
    almacena el resultado en la variable `dataJSON`. */
    const dataJSON = atob(dataB64)

    /* La línea `const data = JSON.parse(dataJSON)` analiza la cadena JSON `dataJSON` y la convierte en
    un objeto JavaScript. Esto nos permite acceder a las propiedades y valores de los datos JSON
    utilizando la notación de puntos. */
    const data = JSON.parse(dataJSON)

    /* La línea `const userId = data.sub` asigna el valor de la propiedad `sub` del objeto `data` a la
    variable `userId`. Esto supone que el objeto `datos` tiene una propiedad denominada `sub` que
    representa el ID de usuario. */
    const userId = data.sub

    return userId
}
export default extractUserIdFromToken
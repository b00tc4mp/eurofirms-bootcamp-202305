/**
 * La función `stringValid` se usa para validar una cadena y arroja un error si la cadena no es válida.
 * @param data - El parámetro `data` es la cadena que desea validar.
 * @param [option=0] - El parámetro "opción" es un parámetro opcional que determina el tipo de validación de cadena a realizar. Tiene un valor predeterminado de 0, que representa una validación de cadena normal.
 */
function stringValid(data, option = 0) {
    switch (option) {
        case 0: // Validación standard de string
            if (typeof data !== 'string') throw new Error('No es una cadena')
            if (data === '') throw new Error('La cadena está vacía')

        default: throw new Error('Opción no definida')
    }
}
module.exports = stringValid
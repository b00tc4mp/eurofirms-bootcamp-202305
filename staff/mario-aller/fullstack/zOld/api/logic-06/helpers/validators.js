/**
 * La función `checkDictio` verifica si todos los caracteres en una cadena dada están presentes en un diccionario dado.
 * @param dictionary - El parámetro `dictionary` es una matriz de caracteres que representa los caracteres válidos permitidos en la cadena.
 * @param str - El parámetro `str` es una cadena que desea comparar con un diccionario.
 * @returns `true` si todos los caracteres de la cadena están presentes en el diccionario.
 */
function checkDictio(dictionary, str) {
    let invalid = ''
    for (let i = 0; i < str.length; i++) if (!dictionary.includes(str[i])) {
        invalid = str[i]
        break
    }
    if (invalid !== '') throw new Error('Caracter ' + invalid + ' no válido')
    return true
}

/**
 * La función `validateStr` es una función de JavaScript que valida diferentes tipos de cadenas en función de la opción especificada.
 * @param data - El parámetro `data` es la cadena que necesita ser validada. Puede ser cualquier valor de cadena.
 * @param [option=0] - El parámetro `opción` se utiliza para especificar el tipo de validación que se realizará en la cadena de `datos`. Puede tomar uno de los siguientes valores:
 *   REGULAR : 0,
 *   EMAIL : 1,
 *   PASSWORD : 2,
 *   URL: 3,
 *   NAME : 4
 */
function validateStr(data, option = 0) {
    if (typeof data !== 'string') throw new Error('El parámetro no es una cadena')
    if (data === '') throw new Error('La cadena está vacía')

    const charsValid1 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const charsValid2 = ',;:._-$'
    const charsValid3 = '._-$'
    const charsValid4 = 'ñÑáéíóúäëïöüÁÉÍÓÚÄËÏÖÜ'
    const charsValid5 = '@/=?()%'

    switch (option) {
        case validateStr.REGULAR:
            checkDictio(charsValid1 + charsValid2, data)

            break
        case validateStr.EMAIL:
            checkDictio(charsValid1 + charsValid3 + '@', data)

            const atPos = data.indexOf('@')
            const dotPos = data.lastIndexOf('.')
            if (atPos < 0) throw new Error('Correo sin @')
            if (atPos === 0) throw new Error('Correo con @ al principio')
            if (atPos === data.length - 1) throw new Error('Correo con @ al final')
            if (dotPos < 0) throw new Error('Correo sin .')
            if (dotPos === 0) throw new Error('Correo con . al principio')
            if (dotPos === data.length - 1) throw new Error('Correo con . al final')
            if (dotPos - atPos < 2) throw new Error('@ y . mal colocados')

            const strAux1 = data.substring(0, atPos)
            const strAux2 = data.substring(atPos + 1)
            checkDictio(charsValid1 + charsValid3, strAux1)
            checkDictio(charsValid1 + charsValid3, strAux2)

            break
        case validateStr.PASSWORD:
            checkDictio(charsValid1 + charsValid2 + charsValid4 + '@', data)
            if (data.length < 8) throw new Error('La clave debe tener 8 o más caracteres')

            break
        case validateStr.URL:
            checkDictio(charsValid1 + charsValid2 + charsValid5, data)
            if (data.substring(0, 4).toLowerCase() !== 'http')
                throw new Error('La dirección no empieza por http')

            break
        case validateStr.NAME:
            checkDictio(charsValid1 + charsValid2 + charsValid4, data)

            break
        default: throw new Error('Opción no definida')
    }
}

validateStr.REGULAR = 0
validateStr.EMAIL = 1
validateStr.PASSWORD = 2
validateStr.URL = 3
validateStr.NAME = 4

module.exports = { validateStr }
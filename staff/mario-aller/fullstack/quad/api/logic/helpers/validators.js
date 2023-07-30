/**
 * The function `checkDictio` checks if all characters in a given string are present in a given
 * dictionary and throws an error if any character is not valid.
 * @param dictionary - The `dictionary` parameter is an array of characters that represents the valid
 * characters allowed in the string.
 * @param str - The `str` parameter is a string that you want to check against a dictionary. The
 * function `checkDictio` will iterate through each character in the `str` and check if it exists in
 * the `dictionary` array. If any character in `str` is not found in the `dictionary
 * @returns a boolean value, either true or false.
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
 * The `validateString` function in JavaScript is used to validate different types of strings based on
 * the specified option.
 * @param data - The `data` parameter is the string that needs to be validated. It is the input that
 * you want to check for validity.
 * @param [option=0] - The `option` parameter is an optional parameter that determines the type of
 * validation to be performed on the `data` string. It has the following possible values:
 */
function validateString(data, option = 0) {
    if (typeof data !== 'string') throw new Error('El parámetro no es una cadena')
    if (data === '') throw new Error('La cadena está vacía')

    const charsValid1 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const charsValid2 = '+/,;:._-$'
    const charsValid3 = '._-$'
    const charsValid4 = 'ñÑáéíóúäëïöüÁÉÍÓÚÄËÏÖÜçÇ'
    const charsValid5 = '@/=?()%&'
    const charsValid6 = '0123456789'

    switch (option) {
        case validateString.REGULAR:
            checkDictio(charsValid1 + charsValid2 + charsValid5, data)

            break
        case validateString.EMAIL:
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

            const strAux1 = data.slice(0, atPos)
            const strAux2 = data.slice(atPos + 1)
            checkDictio(charsValid1 + charsValid3, strAux1)
            checkDictio(charsValid1 + charsValid3, strAux2)

            break
        case validateString.PASSWORD:
            checkDictio(charsValid1 + charsValid2 + charsValid4 + '@', data)
            if (data.length < 3) throw new Error('La clave debe tener 3 o más caracteres')

            break
        case validateString.URL:
            checkDictio(charsValid1 + charsValid2 + charsValid5, data)
            if (data.slice(0, 4).toLowerCase() !== 'http')
                throw new Error('La dirección no empieza por http')

            break
        case validateString.NAME:
            checkDictio(charsValid1 + charsValid2 + charsValid4 + ' ', data)

            break
        case validateString.INTEGER:
            checkDictio(charsValid6, data)
            if (data.length > 15) throw new Error('Número muy grande')

            break
        default: throw new Error('Opción no definida')
    }
}

validateString.REGULAR = 0
validateString.EMAIL = 1
validateString.PASSWORD = 2
validateString.URL = 3
validateString.NAME = 4
validateString.INTEGER = 5

module.exports = { validateString }
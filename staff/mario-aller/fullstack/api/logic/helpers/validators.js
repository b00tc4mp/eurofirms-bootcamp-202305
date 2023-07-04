const ctx = require('./ctxAux')

/**
 * La función `dictio` comprueba si todos los caracteres de una cadena dada están presentes en un diccionario dado y arroja un error si algún carácter no es válido.
 * @param dictionary - El parámetro `dictionary` es una matriz de caracteres que representa los caracteres válidos permitidos en la cadena de entrada.
 * @param str - El parámetro `str` es una cadena que representa una palabra o una oración.
 * @returns un valor booleano, ya sea verdadero o falso.
 */
function dictio(dictionary, str) {
    let invalid = ''
    for (let i = 0; i < str.length; i++) if (!dictionary.includes(str[i])) {
        invalid = str[i]
        break
    }
    if (invalid !== '') throw new Error('Caracter ' + invalid + ' no válido')
    return true
}

/**
 * La función `stringValid` es una función de JavaScript que valida diferentes tipos de cadenas en función de la opción especificada.
 * @param data - El parámetro `data` es la cadena que necesita ser validada. Es la entrada cuya validez desea verificar de acuerdo con la opción especificada.
 * @param [option=0] - El parámetro `opción` es un parámetro opcional que determina el tipo de validación que se realizará en la cadena de `datos`. Tiene los siguientes valores posibles:
 *   STR_REGULAR : 0,
 *   STR_EMAIL : 1,
 *   STR_PASSWORD : 2,
 *   STR_URL: 3,
 *   STR_NAME : 4
 */
function stringValid(data, option = 0) {
    if (typeof data !== 'string') throw new Error('El parámetro no es una cadena')
    if (data === '') throw new Error('La cadena está vacía')

    const charsValid1 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const charsValid2 = ',;:._-$'
    const charsValid3 = '._-$'
    const charsValid4 = 'ñÑáéíóúäëïöüÁÉÍÓÚÄËÏÖÜ'
    const charsValid5 = '@/=?()%'

    switch (option) {
        case ctx.STR_REGULAR:
            dictio(charsValid1 + charsValid2, data)

            break
        case ctx.STR_EMAIL:
            dictio(charsValid1 + charsValid3 + '@', data)

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
            dictio(charsValid1 + charsValid3, strAux1)
            dictio(charsValid1 + charsValid3, strAux2)

            break
        case ctx.STR_PASSWORD:
            dictio(charsValid1 + charsValid2 + charsValid4 + '@', data)
            if (data.length < 8) throw new Error('La clave debe tener 8 o más caracteres')

            break
        case ctx.STR_URL:
            dictio(charsValid1 + charsValid2 + charsValid5, data)
            if (data.substring(0, 4).toLowerCase() !== 'http')
                throw new Error('La dirección no empieza por http')

            break
        case ctx.STR_NAME:
            dictio(charsValid1 + charsValid2 + charsValid4, data)

            break
        default: throw new Error('Opción no definida')
    }
}
module.exports = { stringValid }
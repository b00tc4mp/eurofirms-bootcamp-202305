function validateEmail(email) {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (email === '') throw new Error('email is empty')

    /* La línea `const indexOfAt = email.indexOf('@')` busca la posición de índice del símbolo '@' en
    la cadena de correo electrónico. Está utilizando el método `indexOf()` de la cadena para buscar
    la primera aparición del símbolo '@'. La posición del índice luego se almacena en la variable
    `indexOfAt` para su uso posterior en el proceso de validación. */
    const indexOfAt = email.indexOf('@')

    if (indexOfAt < 0) throw new Error('email does not have @')
    if (indexOfAt === 0) throw new Error('email starts with @')
    if (indexOfAt === email.length - 1) throw new Error('email ends with @')

    /* La línea `const indexOfDot = email.lastIndexOf('.', indexOfAt)` encuentra la última aparición
    del carácter '.' en la cadena de correo electrónico, comenzando la búsqueda desde la posición
    del índice especificada por `indexOfAt`. */
    const indexOfDot = email.lastIndexOf('.', indexOfAt)

    if (indexOfDot < 0) throw new Error('email does not have .')
    if (indexOfDot === 0) throw new Error('email starts with .')
    if (indexOfDot === email.length - 1) throw new Error('email ends with .')

    if (indexOfAt > indexOfDot) throw new Error('@ is after .')
    if (indexOfDot - indexOfAt === 1) throw new Error('. is next to @')

    /* El `const dictionary` es una cadena que contiene todos los caracteres válidos que se pueden usar
    en una dirección de correo electrónico. Incluye letras minúsculas de la 'a' a la 'z', números
    del '0' al '9' y caracteres especiales como '_', '-', '.' y '$'. Esta cadena se utiliza para
    comprobar si cada carácter de la dirección de correo electrónico es válido según las reglas
    especificadas. */
    const dictionary = 'abcdefghijklmnopqrstuvwxyz0123456789_-.$'
    const domainDictionary = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < indexOfAt; i++) {
        const char = email[i]

        if (!dictionary.includes(char)) throw new Error(char + ' is not a valid character')
    }

    for (let i = indexOfAt + 1; i < indexOfDot; i++) {
        const char = email[i]

        if (!dictionary.includes(char)) throw new Error(char + ' is not a valid character')
    }

    for (let i = indexOfDot + 1; i < email.length; i++) {
        const char = email[i]

        if (!domainDictionary.includes(char)) throw new Error(char + ' is not a valid character')
    }
}
function validatePassword(password) {
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (password === '') throw new Error('password is empty')
    if (password.length < 8) throw new Error('password length is lower than 8')
}

function validateName(name) {
    if (typeof name !== 'string') throw new Error('name is not a string')
    if (name === '') throw new Error('name is empty')
}

function validateId(id) {
    if (typeof id !== 'string') throw new Error('id is not a string')
    if (id === '') throw new Error('id is empty')
}

function validateUrl(url) {
    if (typeof url !== 'string') throw new Error('url is not a string')
    if (url === '') throw new Error('url is empty')
    if (!url.startsWith('http')) throw new Error('url is not valid')
}

function validateText(text) {
    if (typeof text !== 'string') throw new Error('text is not a string')
    if (text === '') throw new Error('text is empty')
}

/* `module.exports` es un objeto especial en Node.js que se usa para definir la interfaz pública de un
módulo. En este caso se trata de exportar varias funciones (`validateEmail`, `validateId`,
`validateName`, `validatePassword`, `validateText`, `validateUrl`) para que puedan ser utilizadas
por otros módulos o scripts que requieran este módulo. */
module.exports = {
    validateEmail,
    validateId,
    validateName,
    validatePassword,
    validateText,
    validateUrl
}


/**
 * The code provides functions to validate email, password, name, ID, URL, and text inputs.
 * @param email - A string representing an email address.
 */
function validateEmail(email) {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (email === '') throw new Error('email is empty')

    const indexOfAt = email.indexOf('@')

    if (indexOfAt < 0) throw new Error('email does not have @')
    if (indexOfAt === 0) throw new Error('email starts with @')
    if (indexOfAt === email.length - 1) throw new Error('email ends with @')

    const indexOfDot = email.lastIndexOf('.')

    if (indexOfDot < 0) throw new Error('email does not have .')
    if (indexOfDot === 0) throw new Error('email starts with .')
    if (indexOfDot === email.length - 1) throw new Error('email ends with .')

    if (indexOfAt > indexOfDot) throw new Error('@ is after .')
    if (indexOfDot - indexOfAt === 1) throw new Error('. is next to @')

    const dictionary = 'abcdefghijklmnopqrstuvwxyz0123456789_-$'

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

        if (!dictionary.includes(char)) throw new Error(char + ' is not a valid character')
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
    if (!url.startsWith('http')) throw new Error('url does not start with http')
}

function validateText(text) {
    if (typeof text !== 'string') throw new Error('text is not a string')
    if (text === '') throw new Error('text is empty')
}

// ...

module.exports = {
    validateEmail,
    validatePassword,
    validateName,
    validateId,
    validateUrl,
    validateText
}
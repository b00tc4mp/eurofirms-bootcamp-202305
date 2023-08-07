function validateEmail(email) {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (email === '') throw new Error('Email is empty')

    const indexOfAt = email.indexOf('@')

    if (indexOfAt < 0) throw new Error('Email does not have @')
    if (indexOfAt === 0) throw new Error('Email starts with @')
    if (indexOfAt === email.length - 1) throw new Error('email ends with @')

    const indexOfDot = email.lastIndexOf('.')

    if (indexOfDot < 0) throw new Error('Email does not have .')
    if (indexOfDot === 0) throw new Error('Email starts with .')
    if (indexOfDot === email.length - 1) throw new Error('Email ends with .')

    if (indexOfAt > indexOfDot) throw new Error('@ is after .')
    if (indexOfDot - indexOfAt === 1) throw new Error('. is next to @')

    const dictionary = 'abcdefghijklmnopqrstuvwxyz0123456789_-$'
    const domainDictionary = 'abcdefghijklmnopqrstuvwxyz0123456789_-$'

    /* The code block you provided is part of the `validateEmail` function. It is responsible for
    checking if each character in the email address is valid. */
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

/**
 * The function `validatePassword` checks if a given password meets certain criteria.
 * @param password - The parameter "password" is a string that represents the password to be validated.
 */
function validatePassword(password) {
    if (typeof password !== 'string') throw new Error('Password is not a string')
    if (password === '') throw new Error('Password is empty')
    if (password.length < 8) throw new Error('Password length is lower than 8')
}

/**
 * The function `validateName` checks if a given name is a non-empty string.
 * @param name - The parameter "name" is a variable that represents a person's name.
 */
function validateName(name) {
    if (typeof name !== 'string') throw new Error('Name is not a string')
    if (name === '') throw new Error('Name is empty')
}

/**
 * The function `validateId` checks if the provided `id` is a non-empty string.
 * @param id - The `id` parameter is a string that represents an identifier.
 */
function validateId(id) {
    if (typeof id !== 'string') throw new Error('id is not a string')
    if (id === '') throw new Error('id is empty')
}

/**
 * The function `validateUrl` checks if a given URL is a non-empty string that starts with "http".
 * @param url - The `url` parameter is a string that represents a URL.
 */
function validateUrl(url) {
    if (typeof url !== 'string') throw new Error('url is not a string')
    if (url === '') throw new Error('url is empty')
    if (!url.startsWith('http')) throw new Error('url does not start with http')
}

/**
 * The function `validateVideo` checks if a given URL is a valid video URL.
 * @param url - The `url` parameter is a string that represents the URL of a video.
 */
/*function validateVideo(url) {
    if (typeof url !== 'string') throw new Error('url is not a string')
    if (url === '') throw new Error('url is empty')
    if (!url.startsWith('http')) throw new Error('url does not start with http')
}*/

/**
 * The function `validateText` checks if a given input is a non-empty string.
 * @param text - The parameter "text" is a variable that represents a piece of text.
 */
function validateText(text) {
    if (typeof text !== 'string') throw new Error('text is not a string')
    if (text === '') throw new Error('text is empty')
}

/* In JavaScript, `module.exports` is a special object that is used to define the public interface of a
module. It allows you to export functions, objects, or values from a module so that they can be used
in other parts of your code. */
module.exports = {
    validateEmail,
    validatePassword,
    validateName,
    validateId,
    validateUrl,
    validateText,
}
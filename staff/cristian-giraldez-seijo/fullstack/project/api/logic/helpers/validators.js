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

    const dictionary = 'abcdefghijklmnopqrstuvwxyz0123456789_-$.'

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

function validateString(string) {
    if (typeof string !== 'string') throw new Error('string is not a string')
}

function validateRequiredString(string) {
    if (typeof string !== 'string') throw new Error('string is not a string')
    if (string === '') throw new Error('String cannot be empty')
}

function validateBoolean(boolean) {
    if (typeof boolean !== 'boolean') throw new Error('boolean is not a boolean')
}

function validateId(id) {
    if (typeof id !== 'string') throw new Error('id is not a string')
    if (id === '') throw new Error('id is empty')
}

module.exports = {
    validateEmail,
    validatePassword,
    validateString,
    validateRequiredString,
    validateBoolean,
    validateId,

}
function validateEmail(email) {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (email === '') throw new Error('email is empty')

    const indexOfAt = email.indexOf('@')
    if (indexOfAt < 0) throw new Error('@ not found')
    if (indexOfAt === 0) throw new Error('@ is the first element')
    if (indexOfAt === email.length - 1) throw new Error('email end with @')

    const indexOfDot = email.indexOf('.', indexOfAt)
    const indexOfFirstDot = email.indexOf('.')
    if (indexOfFirstDot === 0) throw new Error('dot is the first element')
    if (indexOfDot < 0) throw new Error('dot not found')
    if (indexOfDot === email.length - 1) throw new Error('email end with dot')
    if (email.length - indexOfDot - 1 < 2) throw new Error('email must have at least 2 character after dot')

    if (indexOfAt + 1 === indexOfDot) throw new Error('dot is the next element from @')

    const dictionary = 'abcdefghijklmnñopqrstuvwxyz0123456789_-.'
    const dictionary2 = 'abcdefghijklmnñopqrstuvwxyz'

    for (let i = 0; i < indexOfAt; i++) {
        if (!dictionary.includes(email[i])) throw new Error('incorrect character ' + email[i])
    }

    for (let i = indexOfAt + 1; i < indexOfDot; i++) {
        if (!dictionary.includes(email[i])) throw new Error('incorrect character ' + email[i])
    }

    for (let i = indexOfDot + 1; i < email.length; i++) {
        if (!dictionary2.includes(email[i])) throw new Error('incorrect character ' + email[i])
    }
}

function validatePassword(password) {
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (password === '') throw new Error('password is empty')

    if (password.length < 6) throw new Error('password lenght should be bigger than 6')
}

function validateName(name) {
    if (typeof name !== 'string') throw new Error('name is not a string')
    if (name === '') throw new Error('name is empty')
}

function validateText(text) {
    if (typeof text !== 'string') throw new Error('text is not a string')
    if (text === '') throw new Error('text is empty')
}

function validateId(id) {
    if (typeof id !== 'string') throw new Error('id is not a string')
    if (id === '') throw new Error('id is empty')
}

function validateImage(image) {
    if (typeof image !== 'string') throw new Error('image is not a string')
    if (image === '') throw new Error('image is empty')

    if (!image.startsWith('http')) throw new Error('image not start with http')
}


module.exports = {
    validateEmail,
    validatePassword,
    validateName,
    validateText,
    validateId,
    validateImage: validateImage
}
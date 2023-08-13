function validateEmail(email) {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (email === '') throw new Error('email is empty')

    const indexOfAt = email.indexOf('@')

    if (indexOfAt < 0) throw new Error('email does not have @')
    if (indexOfAt === 0) throw new Error('email starts with @')
    if (indexOfAt === email.length - 1) throw new Error('email ends with @')

    const indexOfDot = email.indexOf('.', indexOfAt)

    if (indexOfDot < 0) throw new Error('email does not have .')
    if (indexOfDot === 0) throw new Error('email starts with .')
    if (indexOfDot === email.length - 1) throw new Error('email ends with .')

    if (indexOfAt > indexOfDot) throw new Error('@ is after .')
    if (indexOfDot - indexOfAt === 1) throw new Error('. is next to @')

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

function validateText(description) {
    if (typeof description !== 'string') throw new Error('description is not a string')
    if (description === '') throw new Error('description is empty')
}

function validateDate(date) {
    if (!(date instanceof Date)) {
      throw new Error('date is not a Date')
    }}

function validateZip(zip) {
    if (typeof zip !== 'string') throw new Error('zip is not a string')
    if (zip === '') throw new Error('zip is empty')
}

function validatePhone(phone) {
    if (typeof phone !== 'string') throw new Error('phone is not a string')
    if (phone === '') throw new Error('phone is empty')
}

function validateAttendantsLimit(attendantsLimit) {
    if (typeof attendantsLimit !== 'number') throw new Error('attendantsLimit is not a number')
    if (attendantsLimit <= 0 || attendantsLimit > 13) throw new Error('attendants out of limits ') 
}

function validatePlace(place){ 
    if (typeof place !== 'string')throw new Error('Place must be a string')
}  
function validateOrnaments(ornaments) {
    if (!(ornaments instanceof Array)) throw new Error('type ornaments is not an array')

    for (let i = 0; i < ornaments.length; i++) {
        if(typeof ornaments[i] !== 'string') throw new error(`${ornaments[i]} is not a string`)
        if(ornaments[i] === '') throw new error(`${ornaments[i]} is empty`)
    }
}
function validateMaterials(materials) {
    if (typeof materials !== 'string') throw new Error ('materials is not a string')
    if (typeof materials === '') throw new Error ('materials is empty')
}

module.exports = {
    validateEmail,
    validateId,
    validateName,
    validatePassword,
    validateText,
    validateUrl,
    validateDate,
    validatePhone,
    validateZip,
    validateAttendantsLimit,
    validateMaterials,
    validateOrnaments,
    validatePlace
}


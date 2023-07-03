function stringValidator(data, dataName) {
    if (typeof data !== 'string') throw new Error(dataName+' is not a string')
    if (data === '') throw new Error(dataName+' is empty')
}
module.exports = stringValidator
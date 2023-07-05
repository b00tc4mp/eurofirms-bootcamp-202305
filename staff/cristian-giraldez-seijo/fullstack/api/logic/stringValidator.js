/**
 * The function `stringValidator` checks if a given data is a non-empty string and throws an error if
 * it is not.
 * @param data - The `data` parameter is the value that you want to validate as a string.
 * @param dataName - The `dataName` parameter is a string that represents the name or identifier of the
 * data being validated. It is used in the error messages to provide more context about which data
 * failed the validation.
 */
function stringValidator(data, dataName) {
    if (typeof data !== 'string') throw new Error(dataName+' is not a string')
    if (data === '') throw new Error(dataName+' is empty')
}
module.exports = stringValidator
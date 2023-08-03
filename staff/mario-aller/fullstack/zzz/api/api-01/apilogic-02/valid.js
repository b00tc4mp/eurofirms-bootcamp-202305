function valid(data) {
    if (typeof data !== 'string') return false
    if (data === '') return false
    return true
}
module.exports = valid
function valid(data, option = 0) {
    switch (option) {
        case 0:
            if (typeof data !== 'string') return false
            if (data === '') return false
            return true
        default: return false
    }
}
module.exports = valid
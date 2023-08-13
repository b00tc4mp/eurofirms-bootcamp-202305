/* The Dimension class represents a numerical value that can be converted to a number, checked if it is
negative, and checked if it is greater than or equal to 2. */
class Dimension {
    constructor(value = 0n) {
        if (!(typeof value === 'number' || typeof value === 'bigint')) throw new Error('value isNaN in Dimension')

        this.value = BigInt(value)
    }
    // Return a number with the value of dimension
    toNumber() {
        return Number(this.value)
    }
    // Check if dimension is negative
    isNegative() {
        return (this.value < 0n)
    }
    // Check if dimension if bigger or equal to 2
    isGreaterThan2() {
        return (this.value >= 2n)
    }
}

module.exports = Dimension